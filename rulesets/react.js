const a11y = require('eslint-config-airbnb/rules/react-a11y').rules

module.exports = {
  'react/destructuring-assignment': ['error', 'never'],
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': [
    'error',
    {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: true,
    },
  ],
  'jsx-a11y/anchor-has-content': 'off',
  'jsx-a11y/control-has-associated-label': 'off',
  '@typehut/jsx-a11y-anchor-has-content': a11y['jsx-a11y/anchor-has-content'],
  '@typehut/jsx-a11y-control-has-associated-label':
    a11y['jsx-a11y/control-has-associated-label'],
}
