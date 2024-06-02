/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
        env: {
          NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
        },
      },
    ];
  },
};

export default nextConfig;
