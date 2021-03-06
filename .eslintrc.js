module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['prettier', 'react'],
  rules: {
    // 0=off, 1=warning, 2=error
    'prettier/prettier': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 1,
    "semi": [2, "always"]
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
  },
};
