module.exports = {
  extends: ['./javascript-react-loose'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./typescript-react-loose'],
    },
    {
      files: ['**/*.d.ts'],
      extends: ['./typescript-declare'],
    },
    {
      files: [
        '**/test/**/*.ts',
        '**/test/**/*.tsx',
        '**/tests/**/*.ts',
        '**/tests/**/*.tsx',
        '**/__tests__/**/*.ts',
        '**/__tests__/**/*.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
      extends: ['./typescript-test'],
    },
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
