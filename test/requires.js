/* eslint strict: 0, global-require: 0 */

'use strict'

const test = require('tape')

test('all entry points parse', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw')

  t.doesNotThrow(() => require('../javascript'), 'javascript does not throw')
  t.doesNotThrow(
    () => require('../javascript-test'),
    'javascript-test does not throw'
  )
  t.doesNotThrow(
    () => require('../javascript-loose'),
    'javascript-loose does not throw'
  )
  t.doesNotThrow(
    () => require('../javascript-react'),
    'javascript-react does not throw'
  )
  t.doesNotThrow(
    () => require('../javascript-react-loose'),
    'javascript-react-loose does not throw'
  )

  t.doesNotThrow(() => require('../typescript'), 'typescript does not throw')
  t.doesNotThrow(
    () => require('../typescript-test'),
    'typescript-test does not throw'
  )
  t.doesNotThrow(
    () => require('../typescript-declare'),
    'typescript-declare does not throw'
  )
  t.doesNotThrow(
    () => require('../typescript-loose'),
    'typescript-loose does not throw'
  )
  t.doesNotThrow(
    () => require('../typescript-react'),
    'typescript-react does not throw'
  )
  t.doesNotThrow(
    () => require('../typescript-react-loose'),
    'typescript-react-loose does not throw'
  )

  t.end()
})
