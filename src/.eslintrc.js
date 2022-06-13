module.exports = {
  env: {
    es6: true,
    node: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'single'],
    'max-len': ['error', {code: 120}],
    'react/prop-types': ['off'],
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
};
