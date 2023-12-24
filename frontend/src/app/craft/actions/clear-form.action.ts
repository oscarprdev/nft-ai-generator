'use server';

import { clearCookiesAction } from '@/app/actions/clear-cookies.action';
import { revalidatePath } from 'next/cache';

export const clearFormAction = () => {
	clearCookiesAction();

	revalidatePath('/craft');
};
