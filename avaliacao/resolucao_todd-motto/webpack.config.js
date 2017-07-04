const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;
const paths = {
  app: `${root}/app/app.module.js`,
  static: {
    index: `${root}/index.html`
  },
};

// Plugins
const prep = {
  clean: new cleanPlugin([
    dist,
  ]),
  copy: new copyPlugin([{
    from: paths.static.index,
  }]),
};

// Loaders
const scripts = {
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: [
    'babel-loader',
  ],
};

const markup = {
  test: /\.html$/,
  loader: 'ngtemplate-loader!html-loader',
};

// Config object
const config = {
  entry: {
    bundle: paths.app,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      scripts,
      markup,
    ],
  },
  plugins: [
    prep.clean,
    prep.copy,
  ],
  output: {
    path: `${dist}/`,
    publicPath: '/',
    filename: 'js/app.[name].js',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};

module.exports = config;
