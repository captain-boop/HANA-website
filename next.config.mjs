/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local /public images are served as-is; webp sources are already optimised.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
