module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', 'dist', 'build'],
  extends: ['../../.eslintrc.base.js'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  rules: {},
  overrides: [
    // @typescript-eslint/no-var-requires
    {
      files: ['bin/*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
