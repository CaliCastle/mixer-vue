const { MixerPlugin } = require('@mixer/cdk-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  // Entry file that webpack will start looking at. We point it at the
  // "scripts" file.
  entry: path.resolve(__dirname, 'src/scripts.js'),
  // Tell webpack that we want to output our bundle to the `build` directory.
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'scripts.js',
  },
  plugins: [
    // The Mixer plugin hooks up all the ✨magic✨ for the development server
    // and uploading to mixer.com.
    new MixerPlugin({ homepage: 'src/index.html' }),
    // The CopyPlugin copies your assets into the build directory.
    new CopyPlugin([
      {
        context: 'src',
        from: '**/*',
        to: path.resolve(__dirname, 'build'),
      },
    ])
  ],
};
