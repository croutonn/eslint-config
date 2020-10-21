const base = require('./test')

module.exports = {
  ...base,
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
    },
  ],
}
