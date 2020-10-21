const reactRules = require('./rulesets/typescript-react')
const base = require('./typescript')

module.exports = {
  ...base,
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@croutonn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    ...base.rules,
    ...reactRules,
  },
}
