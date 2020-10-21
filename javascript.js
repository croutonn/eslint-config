const baseRules = require('./rulesets/base')

module.exports = {
  extends: ['airbnb/base', 'plugin:@croutonn/recommended', 'prettier'],
  rules: baseRules,
}
