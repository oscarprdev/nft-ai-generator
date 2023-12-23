import { APP_API_URL } from '@/constants';

export const getKeywordsAction = async () => {
	const keywordsApiResponse = await fetch(`${APP_API_URL}/api/keywords`);
	const keywordsJsonResponse: string[] = await keywordsApiResponse.json();

	return keywordsJsonResponse;
};
