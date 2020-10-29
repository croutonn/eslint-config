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
}
