const test = require('ava')

const eslint = require('eslint')
const path = require('path')

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    extensions: ['ts'],
    configFile: path.join(__dirname, '../index.js')
  })

  const report = cli.executeOnFiles([
    path.join(__dirname, '../sample'),
    path.join(__dirname, '../index.js')
  ])

  if (report.errorCount > 0) {
    console.log(report.results[0].messages)
  }

  t.is(report.errorCount, 0)
})
