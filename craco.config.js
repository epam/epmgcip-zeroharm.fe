const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@UI": path.resolve(__dirname, "src/_UI"),
      "@Components": path.resolve(__dirname, "src/components"),
    },
    configure: webpackConfig => {
      webpackConfig.module.rules[1].oneOf[2] = {
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve("@svgr/webpack"),
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash].[ext]",
            },
          },
        ],
      };

      return webpackConfig;
    }
  },
};
