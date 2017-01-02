const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  })

  const code = `
const foo = 1
const bar = () => bar(foo)
`

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
