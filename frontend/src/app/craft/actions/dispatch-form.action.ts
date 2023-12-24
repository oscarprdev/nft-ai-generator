'use server';

import { cookies } from 'next/headers';
import { uploadImageAction } from './upload-image.action';
import { generateImageAction } from './generate-image.action';

export const dispatchFormAction = async (formData: FormData) => {
	const file = cookies().get('file')?.value;

	file ? await uploadImageAction(file) : await generateImageAction(formData);
};
