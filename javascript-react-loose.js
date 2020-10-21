const base = require('./javascript-react')
const looseRules = require('./rulesets/loose')

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    ...looseRules,
  },
}
