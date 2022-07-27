module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es2020: true,
    jest: true,
    'cypress/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    document: true,
    'jest/globals': true,
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    'jest',
    'cypress',
  ],
  settings: {
    react: {
      version: '17.0.1',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    semi: 0,
    'no-console': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
};
