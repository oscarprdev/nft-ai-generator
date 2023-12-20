'use server';

import { GalleryImagesResponse } from '@/app/api/gallery/images/types';
import { APP_API_URL } from '@/constants';

export const getImagesByFilterAction = async (filter?: string) => {
	const imagesApiResponse = await fetch(`${APP_API_URL}/api/gallery/images?filter=${filter || 'all'}`, { cache: 'no-cache' });
	const imagesJsonResponse: GalleryImagesResponse = await imagesApiResponse.json();

	return imagesJsonResponse.images;
};
