const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@UI": path.resolve(__dirname, "src/_UI"),
      "@Components": path.resolve(__dirname, "src/components"),
    },
  },
};
