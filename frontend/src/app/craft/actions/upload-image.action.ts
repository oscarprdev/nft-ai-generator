'use server';

import { UploadImageInput } from '@/app/api/craft/upload/types';
import { Bucket } from '@/cloudflare/bucket';
import { APP_API_URL, PUBLIC_R2_URL, S3_ACCESS_KEY_ID, S3_API_URL, S3_SECRET_ACCESS_KEY } from '@/constants';
import fs from 'fs/promises';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const uploadImageAction = async (imageName: string) => {
	const pathName = `./public/${imageName}`;
	const file = await fs.readFile(pathName);

	const url = `${PUBLIC_R2_URL}/${imageName}`;
	const title = cookies().get('title')?.value;
	const prompt = cookies().get('prompt')?.value;
	const keywords = cookies().get('keywords')?.value;

	try {
		if (url && title && prompt && keywords) {
			const bucket = new Bucket('image-store', S3_API_URL, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY);
			await bucket.uploadFile(file, imageName, 'image/png');

			await fs.unlink(pathName);

			const uploadImageInput: UploadImageInput = {
				url,
				title,
				prompt,
				keywords,
			};

			const result = await fetch(`${APP_API_URL}/api/craft/upload`, {
				method: 'POST',
				body: JSON.stringify(uploadImageInput),
			});

			await result.json();
		}
	} catch (error: any) {
		console.log(error);
		redirect(`/craft?file=${file}&error='Error uploading file'`);
	}

	redirect(`/craft?success='Art successfully uploaded'`);
};
