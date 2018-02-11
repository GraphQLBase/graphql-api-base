import * as webpack from 'webpack';
import * as path from 'path';

const base: webpack.Configuration = {
  module: {
    rules: [
      {test: /\.[jt]sx?$/, exclude: /node_modules/, loader: 'babel-loader'},
    ],
  },
};

const clientConfig: webpack.Configuration = {
  ...base,
  entry: {
    client: path.resolve(__dirname, 'src/client/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/client'),
  },
};

const serverConfig: webpack.Configuration = {
  ...base,
  target: 'node',
  entry: {
    server: path.resolve(__dirname, 'src/server/index.ts'),
  },
};

export default [clientConfig, serverConfig];
