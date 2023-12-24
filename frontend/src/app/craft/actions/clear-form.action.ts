'use server';

import { clearCookiesAction } from '@/app/actions/clear-cookies.action';
import { redirect } from 'next/navigation';

export const clearFormAction = () => {
	clearCookiesAction();

	redirect('/craft');
};
