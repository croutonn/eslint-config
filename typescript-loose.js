const looseRules = require('./rulesets/typescript-loose')
const base = require('./typescript')

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    ...looseRules,
  },
}
