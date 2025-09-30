// next.config.mjs
import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: './',
  basePath: '',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { relative: true }  // 使用相对路径
      }
    ]
  },

  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      if (config.optimization.minimizer) {
        config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: true,
              mangle: true,
              format: {
                comments: false,
              },
            },
            extractComments: false,
          })
        );
      } else {
        config.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: true,
              mangle: true,
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ];
      }
    }
    return config;
  },
};

export default nextConfig;
