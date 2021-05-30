const baseRules = require('./rulesets/typescript-base')

module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typehut/recommended',
    'prettier',
  ],
  rules: baseRules,
}
