module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/jsx-runtime', 'standard-with-typescript', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  overrides: [],
  ignorePatterns: ['vite*.ts', '**/node_modules/*', '*.cjs', '**/lib/*', 'testSetup.ts', 'coverage/**/*'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['prettier', 'eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*{test,spec}.{js,jsx,ts,tsx}', '**/testSetup.{ts,tsx}', '**/TestUtils.{ts,tsx}'],
      },
    ],
  },
}
