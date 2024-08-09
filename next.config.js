const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "piraiinfo.com",
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    plugins: [
      (config.module.generator.asset.publicPath = "/_next/"),
      new MiniCssExtractPlugin({
        experimentalUseImportModule: false,
      }),
    ];
    return config;
  },
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
