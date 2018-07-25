'use strict';

const path = require('path');
const readPkgUp = require('read-pkg-up');

// get package name for entry file name
const pkgName = readPkgUp.sync({ normalize: false }).pkg.name;

// remove scope from packageId
const packageId = pkgName.split('/').pop();

module.exports = {
    presets: ['@backtrack/style', '@backtrack/jest'],

    'test.ci-pretest': ['backtrack lint'],

    packageJson: {
        main: `lib/${packageId}.js`,
        license: 'MIT',
        files: ['lib/'],
        engines: {
            node: '>=6.9.0',
            npm: '>=3.10.10',
        },
    },

    files: [
        { makeDirs: ['lib/files'], skip: ['dist', 'src'] },
        { src: 'files/editorconfig', dest: '.editorconfig' },
        { src: 'files/gitignore', dest: '.gitignore' },
        { src: 'files/npmrc', dest: '.npmrc' },
        { src: 'files/yarnrc', dest: '.yarnrc' },
        { src: 'files/README.md', dest: 'README.md', ignoreUpdates: true },
        {
            src: 'files/CHANGELOG.md',
            dest: 'CHANGELOG.md',
            ignoreUpdates: true,
        },
        {
            src: 'files/package-entry.js',
            dest: `lib/${packageId}.js`,
            ignoreUpdates: true,
        },
        {
            src: 'files/package-entry-test.js',
            dest: `lib/${packageId}.test.js`,
            ignoreUpdates: true,
        },
        { src: 'files/wallaby.config.js', dest: 'wallaby.config.js' },
    ],

    config: {
        eslint: {
            extends: [path.resolve(__dirname, 'eslint.js')],
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                strict: ['error', 'safe'],
                'import/no-unresolved': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },

        prettier: {
            trailingComma: 'es5',
        },

        jest: {
            snapshotSerializers: [
                require.resolve('@backtrack/jest-serializer-preset'),
            ],
        },
    },
};
