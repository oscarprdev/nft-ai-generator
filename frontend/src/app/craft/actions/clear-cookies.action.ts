'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const clearCookiesAction = () => {
	cookies().delete('file');
	cookies().delete('prompt');
	cookies().delete('keywords');
	cookies().delete('title');

	revalidatePath('/craft');
};
