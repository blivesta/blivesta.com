module.exports = ({ config }) => {
  // Gatsby
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];
  config.resolve.mainFields = ['browser', 'module', 'main'];

  // Typescript
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('babel-plugin-remove-graphql-queries'),
      ],
    },
  });

  // Storybook
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  // SVG
  config.resolve.extensions.push('.svg');
  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test)))
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
    return data;
  });
  config.module.rules.push({
    test: /\.svg$/,
    loader: require.resolve('svg-react-loader'),
    exclude: /node_module/,
  });

  return config;
};
