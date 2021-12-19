const test = require('ava')

const { ESLint } = require('eslint')
const path = require('path')

test('load config in eslint to validate all rule syntax is correct', async (t) => {
  const eslint = new ESLint({
    useEslintrc: false,
    extensions: ['ts'],
    overrideConfigFile: path.join(__dirname, '../index.js'),
  })

  const files = await eslint.lintFiles([
    path.join(__dirname, '../sample'),
    path.join(__dirname, '../index.js'),
  ])

  for (const file of files) {
    if (file.errorCount > 0) {
      console.log(file.filePath)
      for (const message of file.messages) {
        console.log(message)
      }
    }

    t.is(file.errorCount, 0)
  }
})
