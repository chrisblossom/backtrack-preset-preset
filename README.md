# @backtrack/preset-preset

[![npm](https://img.shields.io/npm/v/@backtrack/preset-preset.svg?label=npm%20version)](https://www.npmjs.com/package/@backtrack/preset-preset)

## About

[backtrack](https://github.com/chrisblossom/backtrack) preset that is used to create backtrack presets.

## Features

*   Adds `lib/PACKAGE-ID.js` as project entry file
*   Creates `lib/files` to store any files that need to be copied
*   Linting / Formatting with [`node/no-unsupported-features`](https://github.com/mysticatea/eslint-plugin-node) that respects [package.json's engines field](https://docs.npmjs.com/files/package.json#engines).
*   Creates base dot files

## Installation

`npm install --save-dev @backtrack/preset-preset`

## Usage

```js
// backtrack.config.js

'use strict';

module.exports = {
    presets: ['@backtrack/preset'],
};
```
