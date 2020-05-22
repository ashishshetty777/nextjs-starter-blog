const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],
  globals: {
    React: 'writable',
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/namespace': [2, {allowComputed: true}],
  },
  // settings: {'import/resolver': 'node'},
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
