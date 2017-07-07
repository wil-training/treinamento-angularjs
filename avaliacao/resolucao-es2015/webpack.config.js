const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

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

const styles = {
  test: /\.scss$/,
  loaders: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ]
};

const markup = {
  test: /\.html$/,
  loader: 'ngtemplate-loader!html-loader',
};

const fonts = {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader?name=fonts/[name].[ext]',
};

// Config object
const config = {
  entry: {
    bundle: [
      'bootstrap-loader',
      paths.app,
    ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      scripts,
      markup,
      styles,
      fonts,
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