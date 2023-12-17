/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pub-17c2fc4e97124c8a93541cac1e9ee69e.r2.dev',
				port: '',
				pathname: '/*',
			},
		],
	},
};

module.exports = nextConfig;
