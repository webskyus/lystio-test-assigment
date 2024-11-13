import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.lystio.co',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
        ],
    }
};

export default nextConfig;
