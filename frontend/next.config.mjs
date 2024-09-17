/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/products',
				destination: '/',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
