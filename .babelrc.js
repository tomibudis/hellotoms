const env = require('./env-config')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', env],
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        alias: {
          '#src': './src',
          '#components': './src/components',
          '#view': './src/view',
        },
      },
    ],
  ],
}
