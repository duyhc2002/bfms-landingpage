const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /antd\.css$/,
    type: 'asset/source',
  })
);
