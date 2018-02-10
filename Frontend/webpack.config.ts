import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  module: {
    rules: [
      {test: /\.[jt]sx?$/, exclude: /node_modules/, loader: 'babel-loader'},
    ],
  },
};

export default config;
