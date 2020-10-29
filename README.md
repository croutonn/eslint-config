# @croutonn/eslint-config

[![npm version](https://img.shields.io/npm/v/@croutonn/eslint-config.svg)](https://www.npmjs.com/package/@croutonn/eslint-config)
[![Downloads/month](https://img.shields.io/npm/dm/@croutonn/eslint-config.svg)](http://www.npmtrends.com/@croutonn/eslint-config)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/croutonn/eslint-config/CI/main)
[![Dependency Status](https://david-dm.org/croutonn/eslint-config.svg)](https://david-dm.org/croutonn/eslint-config)

This is eslint-config for me.

## Usage

```json
{
  "root": true,
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "extends": ["@croutonn/eslint-config/javascript-react-loose"],
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": ["@croutonn/eslint-config/typescript-react-loose"]
    },
    {
      "files": ["**/*.d.ts"],
      "extends": ["@croutonn/eslint-config/typescript-declare"]
    },
    {
      "files": [
        "**/test/**/*.ts",
        "**/test/**/*.tsx",
        "**/tests/**/*.ts",
        "**/tests/**/*.tsx",
        "**/__tests__/**/*.ts",
        "**/__tests__/**/*.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.ts",
        "**/*.spec.tsx"
      ],
      "extends": ["@croutonn/eslint-config/typescript-test"]
    },
    {
      "files": [
        "**/test/**/*.js",
        "**/test/**/*.jsx",
        "**/tests/**/*.js",
        "**/tests/**/*.jsx",
        "**/__tests__/**/*.js",
        "**/__tests__/**/*.jsx",
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      "extends": ["@croutonn/eslint-config/javascript-test"]
    }
  ]
}
```
