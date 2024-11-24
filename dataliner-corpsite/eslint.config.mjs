import js from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import astroRules from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
	{
		ignores: ['node_modules', 'dist', 'build'],
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			astro: astroRules,
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			...astroRules.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			// 追加のルールをここに記述
			'no-console': 'warn',
			'@typescript-eslint/no-unused-vars': 'error',
		},
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			// 追加のルールをここに記述
		},
	},
];
