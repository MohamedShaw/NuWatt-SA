module.exports = {
  presets: ['module:@react-native/babel-preset'],

  // presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./node_modules', './src'],
        alias: {
          '@src': './src',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};