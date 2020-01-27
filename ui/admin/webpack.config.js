const path = require("path");
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.js(x)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 3002
  }
};
