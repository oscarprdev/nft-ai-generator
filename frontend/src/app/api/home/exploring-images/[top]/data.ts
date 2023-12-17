import { PUBLIC_R2_URL } from '@/constants';
import { TopImagesInfo } from './types';

export const topImagesInfo: TopImagesInfo = {
	month: [
		{
			image: `${PUBLIC_R2_URL}/image-6.webp`,
			prompt: 'An inspiring lady donning traditional African voodoo mask',
			alt: 'Lady with African voodoo mask',
		},
		{
			image: `${PUBLIC_R2_URL}/image-7.webp`,
			prompt: 'A mustang muscle car in a horror comic style poster',
			alt: 'A mustang muscle car',
		},
		{
			image: `${PUBLIC_R2_URL}/image-8.webp`,
			prompt: 'Epic view of a girl clan in ultraviolet threads',
			alt: 'Girl in ultraviolet threads',
		},
		{
			image: `${PUBLIC_R2_URL}/image-9.webp`,
			prompt: 'Cat dressed in the costume of "the punisher"',
			alt: 'Cat dressed as "the punisher"',
		},
	],
	week: [],
	day: [],
};
