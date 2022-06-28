const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const ResolverPlugin = require("./plugins/resolver");
process.env.VUE_ROUTER_BASE = "/";
process.env.VUE_APP_NAME = "simplepro";

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  outputDir: "./dist/",
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: (config) => {
    const prepend = config.module
      .rule("prepend")
      .pre()
      .test(/\.tsx$/);
    prepend.include
      .end()
      .use("prepend-loader")
      .loader(path.resolve(__dirname, "./plugins/loader/page-boot-loader.js"));

    ["tsx", "ts"].forEach((ruleName) => {
      config.module
        .rule(ruleName)
        .use("babel-loader")
        .tap((options) => {
          return { ...options, rootMode: "upward" };
        });
    });

    // css modules
    config.module
      .rule("scss")
      .oneOf("normal-modules")
      .use("css-loader")
      .tap((options) => {
        options.modules = {
          localIdentName: "[local]-[hash:base64:5]",
        };
        return options;
      });

    config.plugin("DynamicResolverPlugin").use(ResolverPlugin, []);
  },
});
