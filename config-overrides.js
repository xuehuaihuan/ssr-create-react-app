const rewireStyledComponents = require('react-app-rewire-styled-components');
const env = process.env.NODE_ENV;

module.exports = [
  {
    webpack: (config) => {
      const newConfig = rewireStyledComponents(config, env, {
        ssr: true,
        pure: true,
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
