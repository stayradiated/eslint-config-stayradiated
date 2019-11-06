const test = require('ava')

const config = require('../')

test('config.extends is an array', (t) => {
  t.true(Array.isArray(config.extends))
})

test('config.rules is an object', (t) => {
  t.is(typeof config.extends, 'object')
  t.not(config.extends, null)
})

test('config.plugins is an object', (t) => {
  t.is(typeof config.plugins, 'object')
  t.not(config.plugins, null)
})

test('config.parser is a string', (t) => {
  t.is(typeof config.parser, 'string')
})
