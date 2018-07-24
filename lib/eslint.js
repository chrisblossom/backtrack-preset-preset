'use strict';

module.exports = {
    env: { es6: true },
    parserOptions: { ecmaVersion: 2018 },
    plugins: ['node'],
    rules: {
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-unsupported-features/es-syntax': 'error',
        'node/no-unsupported-features/node-builtins': 'error',
    },
};
