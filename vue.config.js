/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const apiMocker = require('connect-api-mocker');

const isMock = process.env.ENV_MODE === 'mock';
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        PROJECT_BUILD_DATE: JSON.stringify(new Date().toISOString()),
      }),
    ],
  },
  devServer: {
    port: 8099,
    before: (app) => {
      if (isMock) {
        app.use(apiMocker('/mock-api', 'mocks/api'));
      }
    },
  },
};
