const webpackMerge = require('webpack-merge');

module.exports = [
  {
    webpack: (config) => {
      const rules = Array.from(config.module.rules);

      rules.forEach((item, index) => {
        if (Array.isArray(item.oneOf)) {
          item.oneOf.forEach((subitem, subindex) => {
            const hasBabelLoader = subitem.include &&
            subitem.include.includes('src') &&
            subitem.loader &&
            subitem.loader.includes('babel-loader');

            if (hasBabelLoader) {
              subitem.options.plugins.push(
                [
                  'babel-plugin-styled-components',
                  {
                    ssr: true,
                  },
                ],
              );
            }
          });
        }
      });

      const newConfig = webpackMerge(config, {
        module: {
          rules,
        },
      });

      return newConfig;
    },
    devServer: (config) => {
      return config;
    },
    jest: (config) => {
      return config;
    },
  },
];
