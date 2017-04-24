const webpack = require('webpack');
const path = require('path');

// the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/compiled');

// the directory path of the React application's codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

// entry specifies the entry file using which the bundling process starts
// output instructs Webpack what to do after the bundling process has been completed
module.exports = {
  module: {
    //
    loaders: [
      {
        //runs  all files that match the regex through the loader (babel)
        test: /\.jsx?/,
        include: APP_DIR,
        //name of our loader (babel)
        loader: 'babel-loader',
        //our loader options
        //devDependencies in package.json
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  entry: APP_DIR + '/index.jsx',
  //where our compiled bundle will go
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  //allows us to recompile our bundle everytime we see changes
  watch: true
};
