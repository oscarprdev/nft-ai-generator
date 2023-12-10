import {
	CompleteMultipartUploadCommand,
	CreateMultipartUploadCommand,
	ListObjectsV2Command,
	S3Client,
	UploadPartCommand,
} from '@aws-sdk/client-s3';
import { Readable } from 'stream';

type BucketFile = string | Uint8Array | Buffer | Readable;

export class Bucket {
	public readonly S3: S3Client;

	constructor(
		private readonly BucketName: string,
		readonly S3_API_URL: string,
		readonly S3_ACCESS_KEY_ID: string,
		readonly S3_SECRET_ACCESS_KEY: string
	) {
		this.S3 = new S3Client({
			region: 'auto',
			endpoint: S3_API_URL,
			credentials: {
				accessKeyId: S3_ACCESS_KEY_ID,
				secretAccessKey: S3_SECRET_ACCESS_KEY,
			},
		});
	}

	async uploadFile(file: BucketFile, key: string, contentType: string) {
		const createMultipartInput = {
			Bucket: this.BucketName,
			Key: key,
			ContentType: contentType,
		};

		const multipartUploadResponse = await this.S3.send(new CreateMultipartUploadCommand(createMultipartInput));

		const uploadPartInput = {
			...createMultipartInput,
			Body: file,
			UploadId: multipartUploadResponse.UploadId,
			PartNumber: 1,
		};
		const partUploadResponse = await this.S3.send(new UploadPartCommand(uploadPartInput));

		const completeParams = {
			...createMultipartInput,
			UploadId: multipartUploadResponse.UploadId,
			MultipartUpload: {
				Parts: [
					{
						ETag: partUploadResponse.ETag,
						PartNumber: 1,
					},
				],
			},
		};

		await this.S3.send(new CompleteMultipartUploadCommand(completeParams));
	}

	async listContent() {
		return await this.S3.send(new ListObjectsV2Command({ Bucket: this.BucketName }));
	}

	async listItem(key: string) {
		const list = await this.listContent();

		return list.Contents?.find((item) => item.Key === key);
	}
}
