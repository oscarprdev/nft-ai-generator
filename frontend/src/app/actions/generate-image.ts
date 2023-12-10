'use server';

import axios from 'axios';
import fs from 'fs/promises';
import { CLOUDFLARE_BEARER_TOKEN, CLOUDFLARE_STABLE_DIFFUSION_URL } from '@/constants';
import { redirect } from 'next/navigation';

export const generateImage = async (formData: FormData) => {
	// A happy llama running through an orange cloud
	const promptData = { prompt: formData.get('prompt') };
	const outputFileName = `${crypto.randomUUID().toString()}.png`;

	try {
		const stableDifussionResponse = await axios.post(CLOUDFLARE_STABLE_DIFFUSION_URL, promptData, {
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
	} catch (error: any) {
		redirect(`?error=${error.message}`);
	}

	redirect(`?file=${outputFileName}`);
};
