var webpack = require("webpack");

module.exports = function override(config, env) {
  config.module.rules[2].oneOf.push({
    test: /\.js$/,
    exclude: /node_modules(?!\/quill-image-resize-module|quill-video-resize-module)/,
    loader: "babel-loader"
  });

  config.plugins.push(
    new webpack.ProvidePlugin({
      "window.Quill": "quill"
    })
  );

  return config;
};
