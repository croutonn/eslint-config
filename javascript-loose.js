const base = require('./javascript')
const looseRules = require('./rulesets/loose')

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    ...looseRules,
  },
}
