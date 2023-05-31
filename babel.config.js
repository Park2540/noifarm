module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin', {
      relativeSourceLocation: true,
    }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-transform-runtime'],
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
