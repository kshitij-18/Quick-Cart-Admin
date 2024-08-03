/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'localhost'],
    }
};

export default nextConfig;
