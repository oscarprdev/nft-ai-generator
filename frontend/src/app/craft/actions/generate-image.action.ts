'use server';

import axios from 'axios';
import fs from 'fs/promises';
import { CLOUDFLARE_BEARER_TOKEN, CLOUDFLARE_STABLE_DIFFUSION_URL } from '@/constants';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const generateImageAction = async (formData: FormData) => {
	const prompt = { prompt: formData.get('prompt')?.toString() || '' };
	const keywords = { keywords: formData.get('keywords')?.toString() || '' };
	const title = { title: formData.get('title')?.toString() || '' };

	const outputFileName = `${crypto.randomUUID().toString()}.png`;

	try {
		const updatedPrompt = `${prompt.prompt} with the following styles: ${keywords.keywords}`;

		const stableDifussionResponse = await axios.post(
			CLOUDFLARE_STABLE_DIFFUSION_URL,
			{ prompt: updatedPrompt },
			{
				headers: {
					Authorization: `Bearer ${CLOUDFLARE_BEARER_TOKEN}`,
					'Content-Type': 'application/json',
				},
				responseType: 'arraybuffer',
			}
		);

		const response = stableDifussionResponse.data;

		const imageData = Buffer.from(response, 'binary');
		const pathName = `./public/${outputFileName}`;

		await fs.writeFile(pathName, imageData);

		cookies().set('file', outputFileName);
		cookies().set('prompt', prompt.prompt);
		cookies().set('keywords', keywords.keywords);
		cookies().set('title', title.title);
	} catch (error: any) {
		console.log(error);
		redirect(`?error='Error generating AI art'`);
	}

	redirect(`/craft?modal=craft`);
};
