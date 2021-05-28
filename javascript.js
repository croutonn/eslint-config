const baseRules = require('./rulesets/base')

module.exports = {
  extends: ['airbnb/base', 'plugin:@typehut/recommended', 'prettier'],
  rules: baseRules,
}
