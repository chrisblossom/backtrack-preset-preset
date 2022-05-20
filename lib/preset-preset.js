'use strict';

const readPkg = require('read-pkg');

// get package name for entry file name
const pkgName = readPkg.sync({ normalize: false }).name;

// remove scope from packageId
const packageId = pkgName.split('/').pop();

module.exports = {
	presets: [
		[
			'@backtrack/node',
			{
				mode: 'module',
				syntax: 'node',
			},
		],
	],

	/**
	 * tests often fail because of snapshots. Typically I don't like to test on every commit,
	 * but with a preset it is causing more issues by not testing
	 */
	'git-pre-commit': ['backtrack test'],

	files: [
		{ makeDirs: ['lib/files'] },
		{ src: 'files/README.md', dest: 'README.md', ignoreUpdates: true },
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
	],

	config: {
		eslint: {
			rules: {
				'node/no-unpublished-require': 'off',
				'import/no-extraneous-dependencies': 'off',
				'import/no-unresolved': 'off',
				'arrow-body-style': 'off',
				'jest/prefer-inline-snapshots': 'off',
			},
		},

		jest: {
			snapshotSerializers: [
				require.resolve('@backtrack/jest-serializer-preset'),
			],
		},

		wallaby: (config) => {
			// eslint-disable-next-line no-param-reassign
			config.files = [
				{ pattern: 'lib/**/files/**/*', instrument: false },
				{ pattern: 'lib/**/files/**/.*', instrument: false },
				...config.files,
			];

			return config;
		},
	},
};
