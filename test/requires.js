/* eslint strict: 0, global-require: 0, import/no-dynamic-require: 0 */

'use strict'

const test = require('tape')

const configs = require('./config-list')

test('all entry points parse', (t) => {
  configs.forEach(config => {
    t.doesNotThrow(() => require(`../${config}`), `${config} does not throw`)
  })

  t.end()
})
