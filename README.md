# @croutonn/eslint-config

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
  "extends": ["@croutonn/javascript-react-loose"],
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": ["@croutonn/typescript-react-loose"]
    },
    {
      "files": ["**/*.d.ts"],
      "extends": ["@croutonn/typescript-declare"]
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
      "extends": ["@croutonn/typescript-test"]
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
      "extends": ["@croutonn/javascript-test"]
    }
  ]
}
```
