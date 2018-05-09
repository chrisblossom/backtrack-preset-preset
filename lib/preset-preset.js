'use strict';

const path = require('path');

module.exports = {
    presets: ['@backtrack/style'],

    packageJson: {
        files: ['lib/'],
        scripts: {
            prepush: 'npm run lint',
            prepublishOnly: 'npm run lint',
        },
        engines: {
            node: '>=6.9.0',
            npm: '>=3.10.10',
            yarn: '>=1.6.0',
        },
    },

    files: [
        {
            makeDirs: ['lib'],
            skip: ['dist', 'src'],
        },
        {
            src: 'files/editorconfig',
            dest: '.editorconfig',
        },
        {
            src: 'files/gitignore',
            dest: '.gitignore',
        },
        {
            src: 'files/npmrc',
            dest: '.npmrc',
        },
        {
            src: 'files/yarnrc',
            dest: '.yarnrc',
        },
    ],

    config: {
        eslint: {
            extends: [path.resolve(__dirname, 'eslint.js')],
            overrides: [
                {
                    files: 'lib/**/*.js',
                    parserOptions: {
                        sourceType: 'script',
                    },
                    rules: {
                        strict: ['error', 'safe'],
                        'import/no-unresolved': 'off',
                        'import/no-extraneous-dependencies': 'off',
                    },
                },
            ],
        },

        prettier: {
            overrides: [
                {
                    files: 'lib/**/*.js',
                    options: {
                        trailingComma: 'es5',
                    },
                },
            ],
        },
    },
};
