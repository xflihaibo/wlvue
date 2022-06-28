module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@vue/typescript/recommended"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],
        "@typescript-eslint/ban-ts-comment": 0,
      },
    },
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
