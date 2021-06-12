module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		jest: true,
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
	],
	rules: {
		"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false, argsIgnorePattern: "next" }],
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
	},
};
