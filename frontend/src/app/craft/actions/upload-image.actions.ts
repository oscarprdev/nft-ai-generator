'use server';

import { Bucket } from '@/cloudflare/bucket';
import { S3_ACCESS_KEY_ID, S3_API_URL, S3_SECRET_ACCESS_KEY } from '@/constants';
import fs from 'fs/promises';
import { redirect } from 'next/navigation';

export const uploadImageActions = async (imageName: string) => {
	const pathName = `./public/${imageName}`;
	const file = await fs.readFile(pathName);

	try {
		const bucket = new Bucket('image-store', S3_API_URL, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY);
		await bucket.uploadFile(file, imageName, 'image/png');

		await fs.unlink(pathName);
	} catch (error: any) {
		redirect(`?file=${file}&error='Error uploading file'`);
	}
};
