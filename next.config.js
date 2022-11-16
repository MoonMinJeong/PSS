/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['maon.s3.ap-northeast-2.amazonaws.com'], // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
    },
};

module.exports = nextConfig;
