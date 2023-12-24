'use server';

import { cookies } from 'next/headers';

export const clearCookiesAction = () => {
	const allCookies = cookies().getAll();

	allCookies.forEach((cookie) => cookies().delete(cookie.name));
};
