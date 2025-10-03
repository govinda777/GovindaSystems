/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'preact/compat': 'react',
      'preact/hooks': 'react',
      'preact': 'react',
    };
    return config;
  },
}

module.exports = nextConfig
