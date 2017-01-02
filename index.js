const baseRules = require('eslint-config-airbnb-base/rules/style')

const [_, ...restricted] = baseRules.rules['no-restricted-syntax']

const eslintrc = {
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  rules: {
    'arrow-body-style':                    0,
    'arrow-parens':                        [2, 'always'],
    'babel/new-cap':                       1,
    'babel/no-await-in-loop':              2,
    'babel/object-curly-spacing':          1,
    'brace-style':                         [2, '1tbs', {'allowSingleLine': true}],
    'comma-dangle':                        [2, 'always-multiline'],
    'complexity':                          [1, 10],
    'consistent-return':                   0,
    'curly':                               [2, 'all'],
    'eol-last':                            2,
    'generator-star-spacing':              1,
    'global-require':                      0,
    'import/default':                      0,
    'import/named':                        0,
    'import/namespace':                    0,
    'import/no-duplicates':                0,
    'import/no-extraneous-dependencies':   0,
    'import/no-named-as-default':          2,
    'import/no-unresolved':                0,
    'import/prefer-default-export':        0,
    'indent':                              [2, 2, {'SwitchCase': 1}],
    'jsx-quotes':                          [2, 'prefer-single'],
    'key-spacing':                         0,
    'keyword-spacing':                     [2, {'before': true, 'after': true}],
    'no-alert':                            0,
    'no-case-declarations':                0,
    'no-console':                          0,
    'no-extra-semi':                       2,
    'no-multi-spaces':                     0,
    'no-param-reassign':                   0,
    'no-restricted-syntax':                [2, ...restricted.filter(r => r !== 'ForOfStatement')],
    'no-spaced-func':                      2,
    'no-underscore-dangle':                0,
    'no-unused-vars':                      [2, {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}],
    'object-curly-spacing':                [2, 'never'],
    'object-shorthand':                    1,
    'one-var':                             [2, 'never'],
    'prefer-arrow-callback':               2,
    'prefer-template':                     1,
    'quotes':                              [2, 'single'],
    'react/jsx-closing-bracket-location':  0,
    'react/jsx-filename-extension':        0,
    'react/jsx-first-prop-new-line':       [1, 'multiline'],
    'react/no-multi-comp':                 1,
    'react/no-unused-prop-types':          [2, {'skipShapeProps': true}],
    'react/require-extension':             0,
    'require-yield':                       2,
    'semi':                                [2, 'never'],
    'space-before-blocks':                 [2, 'always'],
    'space-before-function-paren':         [2, 'always'],
    'space-infix-ops':                     1
  },
  plugins: [
    'react',
    'import',
    'babel',
    'async-await',
    'no-foreach'
  ],
  settings: {
    'import/resolve': {
      moduleDirectory: [
        'node_modules',
        'src'
      ]
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  }
}

module.exports = eslintrc
