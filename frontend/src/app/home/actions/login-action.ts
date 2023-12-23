'use server';

import { redirect } from 'next/navigation';

export const loginAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
	const email = formData.get('email')?.toString();
	const password = formData.get('password')?.toString();

	if (password !== 'hola') {
		return {
			message: 'Email and/or password are not correct',
		};
	}

	redirect('/gallery');
};
