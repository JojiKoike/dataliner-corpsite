export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-tailwindcss',
	],
	plugins: [],
	rules: {
		'color-no-invalid-hex': true,
		'font-family-no-duplicate-names': true,
		'unit-allowed-list': ['em', 'rem', '%', 's', 'px', 'fr', 'vh', 'vw'],
	},
	overrides: [
		{
			files: ['**/*.{astro,html}'],
			customSyntax: 'postcss-html',
		},
	],
};
