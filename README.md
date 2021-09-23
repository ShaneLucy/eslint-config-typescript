# Eslint Typescript Configuration
An eslint configuration that integrates [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-airbnb-typescript-base](https://www.npmjs.com/package/eslint-config-airbnb-typescript), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)


## Installation 
Install with npm 

```bash
npm install --save-dev "mypackagename"
```

## Setup
Create a .eslintrc.js file in your project root
```bash
touch .eslintrc.js
```

Paste the following into ```.eslintrc.js```
```javascript
module.exports = {
  extends: "eslint-config-typescript",
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

## Usage
```bash
npm run lint
```