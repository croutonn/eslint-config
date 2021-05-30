const base = require('./javascript')
const reactRules = require('./rulesets/react')

module.exports = {
  ...base,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typehut/recommended',
    'prettier',
  ],
  rules: {
    ...base.rules,
    ...reactRules,
  },
}
