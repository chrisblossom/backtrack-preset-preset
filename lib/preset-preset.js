'use strict';

const path = require('path');
const readPkgUp = require('read-pkg-up');

// get package name for entry file name
const pkgName = readPkgUp.sync({ normalize: false }).pkg.name;

// remove scope from packageId
const packageId = pkgName.split('/').pop();

module.exports = {
    presets: ['@backtrack/style'],

    packageJson: {
        main: `lib/${packageId}.js`,
        files: ['lib/'],
        scripts: {
            prepush: 'npm run lint',
            prepublishOnly: 'npm run lint',
            test: null,
        },
        engines: {
            node: '>=6.9.0',
            npm: '>=3.10.10',
            yarn: '>=1.6.0',
        },
    },

    files: [
        { makeDirs: ['lib/files'], skip: ['dist', 'src'] },
        { src: 'files/editorconfig', dest: '.editorconfig' },
        { src: 'files/gitignore', dest: '.gitignore' },
        { src: 'files/npmrc', dest: '.npmrc' },
        { src: 'files/yarnrc', dest: '.yarnrc' },
        { src: 'files/README.md', dest: 'README.md', allowChanges: true },
        { src: 'files/CHANGELOG.md', dest: 'CHANGELOG.md', allowChanges: true },
        {
            src: 'files/package-id.js',
            dest: `lib/${packageId}.js`,
            allowChanges: true,
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
