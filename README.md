# Eslint Airbnb Typescript & Prettier Configuration
An eslint configuration that integrates [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-airbnb-typescript-base](https://www.npmjs.com/package/eslint-config-airbnb-typescript), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

## Assumptions
1. You have typescript installed
1. You have a ```tsconfig.json``` in your project root
1. You have a ```.gitignore``` in your project root
1. You have a top level public directory for static assets
1. You're using a version of Node.js greater than 8

## Installation 
Install with npm   
*Note this will also install eslint*

```bash
npm install --save-dev eslint-config-typescript-airbnb-prettier
```  

## Setup
Create a .eslintrc.js file in your project root
```bash
touch .eslintrc.js
```

Paste the following into ```.eslintrc.js```
```javascript
module.exports = {
  extends: "typescript-airbnb-prettier",
};
```

Add the following command into the scripts object in your ```package.json```
```json
"lint": "prettier --write --plugin-search-dir=. .  && eslint --ignore-path .gitignore src/**"
```

An example scripts object might look like this
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "serve": "vite preview",
  "lint": "prettier --write --plugin-search-dir=. .  && eslint --ignore-path .gitignore src/**"
},
```

In your ```tsconfig.json``` add an excludes key
```json
"exclude": ["node_modules/*", "public/*", "tsconfig.json"]
```

Create an ```.eslintignore``` and add, plus anything else you want eslint to ignore 
```
.eslintrc.js
```

## Usage
```bash
npm run lint
```

## Customisation
This config can be [altered and extended](https://eslint.org/docs/user-guide/configuring/) by editing the ```.eslintrc.js```