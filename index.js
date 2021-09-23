module.exports = {
 root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
    parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
};
