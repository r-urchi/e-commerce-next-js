/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.miraheze.org',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
