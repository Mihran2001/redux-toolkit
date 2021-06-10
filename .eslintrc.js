module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
