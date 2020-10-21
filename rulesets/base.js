module.exports = {
  'no-restricted-imports': ['error', { patterns: ['./', '../'] }],
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
    },
  ],
  'no-underscore-dangle': [
    'error',
    {
      allow: ['__APOLLO__STATE__', '__NEXT_DATA__', '__NUXT__ '],
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal'],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'parent',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
      },
    },
  ],
}
