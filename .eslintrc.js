module.exports = {
	extends: [
		"eslint:recommended",
		"airbnb",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react/recommended",
		"prettier",
		"prettier/@typescript-eslint",
	],
	plugins: ["prettier", "@typescript-eslint"],
	env: { es6: true, browser: true, node: true },
	parser: "@typescript-eslint/parser",
	rules: {
		"prettier/prettier": ["warn"],
		"no-console": "off",
	},
};
