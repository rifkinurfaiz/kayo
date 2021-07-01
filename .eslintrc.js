module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['/coverage/'],
  rules: {
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
