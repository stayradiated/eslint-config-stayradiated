const config = require('../')
const test = require('tape')

test('test basic properties of config', function (t) {
  t.ok(isString(config.extends))
  t.ok(isObject(config.env))
  t.ok(isObject(config.rules))
  t.ok(isObject(config.plugins))
  t.ok(isObject(config.settings))
  t.ok(isString(config.parser))
  t.ok(isObject(config.parserOptions))
  t.end()
})

function isString (string) {
  return typeof string === 'string'
}

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
