# @typehut/eslint-config

[![npm version](https://img.shields.io/github/v/release/typehut/eslint-config)](https://github.com/typehut/eslint-config/packages/817063)
[![Build Status](https://img.shields.io/github/workflow/status/typehut/eslint-config/Test)](https://travis-ci.org/typehut/eslint-config)
[![Dependency Status](https://david-dm.org/typehut/eslint-config.svg)](https://david-dm.org/typehut/eslint-config)

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
  "extends": ["@typehut/eslint-config/javascript-react-loose"],
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": ["@typehut/eslint-config/typescript-react-loose"]
    },
    {
      "files": ["**/*.d.ts"],
      "extends": ["@typehut/eslint-config/typescript-declare"]
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
      "extends": ["@typehut/eslint-config/typescript-test"]
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
      "extends": ["@typehut/eslint-config/javascript-test"]
    }
  ]
}
```
