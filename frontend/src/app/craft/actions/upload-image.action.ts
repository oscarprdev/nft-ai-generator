'use server';

import { clearCookiesAction } from '@/app/actions/clear-cookies.action';
import { UploadImageInput } from '@/app/api/craft/upload/types';
import { Bucket } from '@/cloudflare/bucket';
import { APP_API_URL, PUBLIC_R2_URL, S3_ACCESS_KEY_ID, S3_API_URL, S3_SECRET_ACCESS_KEY } from '@/constants';
import fs from 'fs/promises';
import { redirect } from 'next/navigation';

interface UploadImageActionInput {
	file: string;
	title: string;
	prompt: string;
	keywords: string;
}

export const uploadImageAction = async ({ file, title, prompt, keywords }: UploadImageActionInput) => {
	const pathName = `./public/${file}`;
	const readedFile = await fs.readFile(pathName);

	const url = `${PUBLIC_R2_URL}/${file}`;

	try {
		if (url && title && prompt && keywords) {
			const bucket = new Bucket('image-store', S3_API_URL, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY);
			await bucket.uploadFile(readedFile, file, 'image/png');

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

			clearCookiesAction();
		}
	} catch (error: any) {
		console.log(error);
		redirect(`/craft?error=Error uploading file`);
	}

	redirect(`/craft?success=Art successfully uploaded`);
};
