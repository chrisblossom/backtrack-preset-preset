'use strict';

module.exports = {
    env: { es6: true },
    parserOptions: { ecmaVersion: 2018 },
    plugins: ['node'],
    rules: {
        'node/no-unsupported-features': 'error',
    },
};
