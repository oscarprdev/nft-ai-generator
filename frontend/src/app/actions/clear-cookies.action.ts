'use server';

import { cookies } from 'next/headers';

export const clearCookiesAction = () => {
	const allCookies = cookies().getAll();

	if (allCookies.length > 0) {
		allCookies.forEach((cookie) => cookies().delete(cookie.name));
	}
};
