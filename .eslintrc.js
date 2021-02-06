module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
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
  ],
  parser: 'babel-eslint',
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
