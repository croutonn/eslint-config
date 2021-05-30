const reactRules = require('./rulesets/typescript-react')
const base = require('./typescript')

module.exports = {
  ...base,
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typehut/recommended',
    'prettier',
  ],
  rules: {
    ...base.rules,
    ...reactRules,
  },
}
