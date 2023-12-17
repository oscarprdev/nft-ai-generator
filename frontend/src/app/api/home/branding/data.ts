import { PUBLIC_R2_URL } from '@/constants';
import { BrandingInfo } from './types';

export const brandingImages: BrandingInfo[] = [
	{
		image: `${PUBLIC_R2_URL}/cloudflare.png`,
		alt: 'Cloudflare logo',
	},
	{
		image: `${PUBLIC_R2_URL}/ethereum.png`,
		alt: 'Ethereum logo',
	},
];
