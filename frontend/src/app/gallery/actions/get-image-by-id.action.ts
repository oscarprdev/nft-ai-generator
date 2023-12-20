'use server';

import { GalleryDetailResponse } from '@/app/api/gallery/[id]/type';
import { APP_API_URL } from '@/constants';

export const getImageByIdAction = async (id: string) => {
	const imageApiResponse = await fetch(`${APP_API_URL}/api/gallery/${id}`, { cache: 'no-cache' });
	const imageJsonResponse: GalleryDetailResponse = await imageApiResponse.json();

	return imageJsonResponse.image;
};
