/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
        remotePatterns: [
            {

                protocol: 'https',
                hostname: "images.pexels.com"
            }
        ]
    }
};

export default nextConfig;
