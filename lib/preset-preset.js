'use strict';

const readPkgUp = require('read-pkg-up');

// get package name for entry file name
const pkgName = readPkgUp.sync({ normalize: false }).pkg.name;

// remove scope from packageId
const packageId = pkgName.split('/').pop();

module.exports = {
    presets: [['@backtrack/style', { node: true }], '@backtrack/jest'],

    /**
     * tests often fail because of snapshots. Typically I don't like to test on every commit,
     * but with a preset it is causing more issues by not testing
     */
    'git-pre-commit': ['backtrack test'],

    'test.ci-pretest': ['backtrack lint'],

    packageJson: {
        main: `lib/${packageId}.js`,
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
        { src: 'files/wallaby.js', dest: 'wallaby.config.js' },
    ],

    config: {
        eslint: {
            rules: {
                'node/no-unpublished-require': 'off',
                'import/no-extraneous-dependencies': 'off',
                'import/no-unresolved': 'off',
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
