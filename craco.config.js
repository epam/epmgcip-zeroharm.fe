const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Constants": path.resolve(__dirname, "src/constants"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@Helpers": path.resolve(__dirname, "src/helpers"),
      "@Services": path.resolve(__dirname, "src/services"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@UI": path.resolve(__dirname, "src/_UI"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Theme": path.resolve(__dirname, "src/theme")
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
                plugins: [{ removeViewBox: false }]
              },
              titleProp: true,
              ref: true
            }
          },
          {
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash].[ext]"
            }
          }
        ]
      };

      return webpackConfig;
    }
  }
};
