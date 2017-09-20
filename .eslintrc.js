module.exports = {
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 6,
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	extends: [
		'airbnb-base',
		'plugin:vue/recommended'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here
	'rules': {
		'no-tabs': 0,
		'indent': ['error', 'tab'],
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			'js': 'never',
			'vue': 'never'
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			'optionalDependencies': ['test/unit/index.js']
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}
