/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true, // Disables image optimization
	},
};

export default nextConfig;
