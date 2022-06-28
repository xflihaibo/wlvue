module.exports = function (api) {
  api.cache(true);
  return {
    babelrcRoots: [".", "./packages/*"],
    ignore: [/node_modules/],
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
    ],
  };
};
