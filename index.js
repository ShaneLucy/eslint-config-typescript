module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12,
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
