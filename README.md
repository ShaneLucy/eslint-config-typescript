[![package version](https://img.shields.io/npm/v/eslint-config-typescript-airbnb-prettier?logo=npm&logoWidth=20)](https://img.shields.io/npm/v/eslint-config-typescript-airbnb-prettier?logo=npm&logoWidth=20) [![package weekly downloads](https://img.shields.io/npm/dw/eslint-config-typescript-airbnb-prettier)](https://img.shields.io/npm/dw/eslint-config-typescript-airbnb-prettier?logo=npm&logoWidth=20) [![supported versions of node](https://img.shields.io/node/v/eslint-config-typescript-airbnb-prettier?logo=npm&logoWidth=20)](https://img.shields.io/node/v/eslint-config-typescript-airbnb-prettier?logo=npm&logoWidth=20) [![package vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-typescript-airbnb-prettier?logo=snyk&logoWidth=20)](https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-typescript-airbnb-prettier?logo=snyk&logoWidth=20)

# Eslint, Airbnb, Typescript & Prettier Configuration

An eslint configuration that integrates the following into one package for easy installation and setup:

- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-airbnb-typescript-base](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [prettier](https://www.npmjs.com/package/prettier/v/2.2.1)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-import](https://preview.npmjs.com/package/eslint-plugin-import)

## Assumptions

1. You have typescript installed
1. You have a `tsconfig.json` in your project root
1. You have installed a version of Node greater than 8
1. You have installed npm version 7 or greater

## Installation

> If you aren't using npm version greater than 7 you will have to manually install these dependencies:
>
> - eslint
> - prettier
> - @typescript-eslint/eslint-plugin
>
> Copy everything inside the peer dependencies object [here](https://github.com/ShaneLucy/eslint-config-typescript/blob/master/package.json) and paste it into your dev dependencies object. _This will ensure you have the correct versions installed_

Install with npm

```bash
npm install --save-dev eslint-config-typescript-airbnb-prettier
```

## Setup

Create a .eslintrc.js file in your project root

```bash
touch .eslintrc.js
```

Paste the following into `.eslintrc.js`

```javascript
module.exports = {
  extends: "typescript-airbnb-prettier",
};
```

Add the following commands into the scripts object in your `package.json`

```json
"lint": "prettier --write . && eslint src/**",
"lint-fix": "prettier --write . && eslint src/** --fix"
```

An example scripts object might look like this

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "serve": "vite preview",
  "lint": "prettier --write . && eslint src/**",
  "lint-fix": "prettier --write . && eslint src/** --fix"
},
```

Create an `.eslintignore` in your project root

```
touch .eslintignore
```

Paste the following into `.eslintignore`

```
.eslintrc.js
node_modules/**
```

Create an `.prettierignore` in your project root

```
touch .prettierignore
```

Paste the following into `.prettierignore`

```
node_modules/*
```

## Usage

```bash
npm run lint
```

or to make eslint auto fix any issues it's capable of fixing

```bash
npm run lint-fix
```

## Customisation

This eslint config can be [altered and extended](https://eslint.org/docs/user-guide/configuring/) by editing `.eslintrc.js`

Prettier can be [altered and extended](https://prettier.io/docs/en/options.html) by creating and modifying `.prettierrc`
