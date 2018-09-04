module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['google', 'eslint:recommended'],
  rules: {
    'prettier/prettier': 'error'
  }
};
