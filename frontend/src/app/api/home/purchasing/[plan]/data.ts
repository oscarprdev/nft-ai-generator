import { Purchasing } from './types';

export const purchasingInfo: Purchasing = {
	free: {
		title: {
			ok: true,
			text: 'Free',
		},
		pricing: {
			ok: true,
			text: '0',
		},
		initial: {
			ok: true,
			text: 'Play generating AI art for free and see members images',
		},
		credits: {
			ok: true,
			text: 'Limit generated images: (100 credits /month)',
		},
		access: {
			ok: true,
			text: 'Access to members gallery',
		},
		prompts: {
			ok: true,
			text: 'Basic prompt tags',
		},
		creation: {
			ok: false,
			text: 'Create NFT from AI art',
		},
		sell: {
			ok: false,
			text: 'Share and sell your NFTs',
		},
	},
	standard: {
		title: {
			ok: true,
			text: 'Standard',
		},
		pricing: {
			ok: true,
			text: '10',
		},
		initial: {
			ok: true,
			text: 'Build NFT art using AI generative images in a simple and enjoyable way',
		},
		credits: {
			ok: true,
			text: 'Limit generated images: (500 credits /month)',
		},
		access: {
			ok: true,
			text: 'Access to members gallery',
		},
		prompts: {
			ok: true,
			text: 'Advanced prompt tags',
		},
		creation: {
			ok: true,
			text: 'Create NFT from AI art',
		},
		sell: {
			ok: false,
			text: 'Share and sell your NFTs',
		},
	},
	pro: {
		title: {
			ok: true,
			text: 'pro',
		},
		pricing: {
			ok: true,
			text: '20',
		},
		initial: {
			ok: true,
			text: 'Build NFT art using AI generative images and earn money with them',
		},
		credits: {
			ok: true,
			text: 'Limit generated images: (800 credits /month)',
		},
		access: {
			ok: true,
			text: 'Access to members gallery',
		},
		prompts: {
			ok: true,
			text: 'Make your own tags',
		},
		creation: {
			ok: true,
			text: 'Create NFT from AI art',
		},
		sell: {
			ok: true,
			text: 'Share and sell your NFTs',
		},
	},
};
