export default {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
}
