/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'custom',
    loaderFile: './src/components/ImageLoader.js',
  },

}

module.exports = nextConfig
