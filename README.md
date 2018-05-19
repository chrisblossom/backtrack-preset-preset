# @backtrack/preset-preset

[![npm](https://img.shields.io/npm/v/@backtrack/preset-preset.svg?label=npm%20version)](https://www.npmjs.com/package/@backtrack/preset-preset)
[![Linux Build Status](https://img.shields.io/circleci/project/github/chrisblossom/backtrack-preset-preset/master.svg?label=linux%20build)](https://circleci.com/gh/chrisblossom/backtrack-preset-preset/tree/master)
[![Windows Build Status](https://img.shields.io/appveyor/ci/chrisblossom/backtrack-preset-preset/master.svg?label=windows%20build)](https://ci.appveyor.com/project/chrisblossom/backtrack-preset-preset/branch/master)
[![Code Coverage](https://img.shields.io/coveralls/github/chrisblossom/backtrack-preset-preset/master.svg)](https://coveralls.io/github/chrisblossom/backtrack-preset-preset?branch=master)

## About

[`backtrack`](https://github.com/chrisblossom/backtrack) preset that is used to create `backtrack` presets.

## Features

*   Adds `lib/PACKAGE-ID.js` as project entry file
*   Creates `lib/files` to store any files that need to be copied
*   Linting / Formatting with [`node/no-unsupported-features`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md) that respects [package.json's engines field](https://docs.npmjs.com/files/package.json#engines)
*   Adds [`jest`](https://facebook.github.io/jest/) testing with [`@backtrack/jest-serializer-preset`](https://github.com/chrisblossom/backtrack-jest-serializer-preset) snapshot serializer
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
