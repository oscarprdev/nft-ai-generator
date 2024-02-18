'use server';

import { redirect } from 'next/navigation';

export const closeAction = async () => {
	redirect('/');
};
