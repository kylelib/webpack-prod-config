var webpack = require('webpack');
var stripLoader = require('strip-loader');
var config = require("./webpack.config.js");
var plugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    drop_console: true
  }
});

var loader = {
    test: [/\.js$/, /\.ts$/],
    exclude: /node_modules/,
    loader: stripLoader.loader('console.log')
};

//Get a handle the base config's modules array
config.modules = config.modules || [];
config.module.loaders.push(loader);
config.plugins = config.plugins || [ ];
config.plugins.push(plugin);
module.exports = config;
