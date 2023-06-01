module.exports = {
  presets: [
    ["module:metro-react-native-babel-preset"],
    ["@babel/preset-env", { "loose": false }],
    ["@babel/preset-react"],
    // ["module:metro-react-native-babel-preset"],
    // ["@babel/preset-env", { "loose": false }],
    // ["@babel/preset-react"]
  ],
  plugins: [
    ['react-native-reanimated/plugin', {
      relativeSourceLocation: true,
    }],
  //   [
      
  //     '@babel/plugin-proposal-export-namespace-from',
  //     'react-native-reanimated/plugin',
  // ],
    // ["react-native-reanimated/plugin", { "relativeSourceLocation": true }],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-export-namespace-from"],
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }, "unique-name"]
  ],
};
