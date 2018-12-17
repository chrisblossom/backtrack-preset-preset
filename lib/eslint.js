'use strict';

module.exports = {
    env: { es6: true },
    extends: ['plugin:node/recommended'],
    parserOptions: { ecmaVersion: 2019 },
    plugins: ['node'],
    overrides: [
        {
            files: 'lib/**/*.{js,ts}',
            rules: {
                'node/no-unpublished-require': 'off',
            },
        },
        {
            files: 'lib/files/**/*.{js,ts}',
            rules: {
                'node/no-missing-require': 'off',
            },
        },
    ],
};
