/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maon.s3.ap-northeast-2.amazonaws.com',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
