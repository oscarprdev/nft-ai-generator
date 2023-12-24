'use server';

import axios from 'axios';
import fs from 'fs/promises';
import { CLOUDFLARE_BEARER_TOKEN, CLOUDFLARE_STABLE_DIFFUSION_URL } from '@/constants';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export const generateImageAction = async (formData: FormData) => {
	const prompt = { prompt: formData.get('prompt')?.toString() || '' };
	const keywords = { keywords: formData.get('keywords')?.toString() || '' };
	const title = { title: formData.get('title')?.toString() || '' };

	const outputFileName = `${crypto.randomUUID().toString()}.png`;

	try {
		const stableDifussionResponse = await axios.post(CLOUDFLARE_STABLE_DIFFUSION_URL, prompt, {
			headers: {
				Authorization: `Bearer ${CLOUDFLARE_BEARER_TOKEN}`,
				'Content-Type': 'application/json',
			},
			responseType: 'arraybuffer',
		});

		const response = stableDifussionResponse.data;

		const imageData = Buffer.from(response, 'binary');
		const pathName = `./public/${outputFileName}`;

		await fs.writeFile(pathName, imageData);

		cookies().set('file', outputFileName);
		cookies().set('prompt', prompt.prompt);
		cookies().set('keywords', keywords.keywords);
		cookies().set('title', title.title);

		revalidatePath('/craft');
	} catch (error: any) {
		redirect(`?error='Error generating AI art'`);
	}
};
