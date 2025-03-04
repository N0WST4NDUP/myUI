module.exports = {  
	root: true,
    env: {
        browser: true,
        es2021: true,
    },
	parser: '@typescript-eslint/parser',
	plugins: [
        'react',
        '@typescript-eslint',
        'import',
    ],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
	],
	rules: {
		semi: 'error',
		'@typescript-eslint/no-unused-vars': 'error',
        'import/prefer-default-export': 'off',
	},
    settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
    }
};