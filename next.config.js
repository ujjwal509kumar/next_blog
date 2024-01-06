// File: next.config.js

// Define rewrites for API routes
/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any path after '/api/' and capture it as a parameter
        destination: 'https://next-blog-eight-rust.vercel.app/api/:path*', // Replace with your actual API endpoint
      },
    ];
  },
};

// Additional Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // Enable unoptimized image loading
}

// Export the combined configuration
module.exports = nextConfig;
