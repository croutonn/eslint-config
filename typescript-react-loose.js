const looseRules = require('./rulesets/typescript-loose')
const base = require('./typescript-react')

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    ...looseRules,
  },
}
