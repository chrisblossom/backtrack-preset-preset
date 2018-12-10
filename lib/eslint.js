'use strict';

module.exports = {
    env: { es6: true },
    extends: ['plugin:node/recommended'],
    parserOptions: { ecmaVersion: 2018 },
    plugins: ['node'],
    rules: {
        'node/no-unpublished-require': 'off',
    },
};
