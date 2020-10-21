module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['./javascript-loose'],
  overrides: [
    {
      files: [
        '**/test/**/*.js',
        '**/test/**/*.jsx',
        '**/tests/**/*.js',
        '**/tests/**/*.jsx',
        '**/__tests__/**/*.js',
        '**/__tests__/**/*.jsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      extends: ['./javascript-test'],
    },
  ],
}
