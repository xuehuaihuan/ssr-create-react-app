const webpackMerge = require('webpack-merge');

module.exports = [
  {
    webpack: (config) => {
      const rules = Array.from(config.module.rules);

      rules.forEach((item) => {
        if (Array.isArray(item.oneOf)) {
          item.oneOf.forEach((subitem) => {
            const hasBabelLoader = subitem.include &&
            subitem.include.includes('src') &&
            subitem.loader &&
            subitem.loader.includes('babel-loader');

            if (hasBabelLoader) {
              subitem.options.plugins.unshift(
                [
                  'babel-plugin-styled-components',
                  {
                    ssr: true,
                    pure: true,
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
