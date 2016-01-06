module.exports = {
    entry: [ "./logger", "./app.js"],
    output: {
        filename: "bundle.js"
    },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { 
          test: [/\.ts$/], 
          exclude: /node_modules/, 
          loader: 'ts-loader' 
      }
    ]
  }
}