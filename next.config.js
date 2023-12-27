// next.config.js
module.exports = {
  reactStrictMode: false,
  images: {
    loader: 'custom',
    loaderFile: './src/components/ImageLoader.js',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
