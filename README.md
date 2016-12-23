# Stayradiated ESlint Config

[![circleci][circleci-image]][circleci-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[circleci-image]: https://img.shields.io/circleci/project/stayradiated/eslint-config-stayradiated/master.svg
[circleci-url]: https://circleci.com/gh/stayradiated/eslint-config-stayradiated
[npm-image]: https://img.shields.io/npm/v/eslint-config-stayradiated.svg
[npm-url]: https://npmjs.org/package/eslint-config-stayradiated
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-stayradiated.svg
[downloads-url]: https://npmjs.org/package/eslint-config-stayradiated

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) 

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the Stayradiated ESlint shareable config, first run this:

```bash
npm install -D eslint eslint-config-stayradiated
```

Then, add this to your .eslintrc file:

```json
{
  "extends": "stayradiated"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT. Copyright (c) 2016 George Czabania
