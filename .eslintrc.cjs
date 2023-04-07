module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
  },
};
