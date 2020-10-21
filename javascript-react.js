const base = require('./javascript')
const reactRules = require('./rulesets/react')

module.exports = {
  ...base,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@croutonn/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    ...base.rules,
    ...reactRules,
  },
}
