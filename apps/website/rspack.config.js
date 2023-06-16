const { composePlugins, withNx, withWeb } = require('@nx/rspack');

module.exports = composePlugins(withNx(), withWeb(), (config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
      },
    ],
    type: 'css',
  });
  config.devServer = {
    historyApiFallback: true,
  };
  return config;
});
