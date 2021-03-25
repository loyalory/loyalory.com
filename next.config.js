require('dotenv').config();

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@loyalory/common',
  '@loyalory/icons',
  '@loyalory/themes',
]);
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

const assetPrefix = process.env.NEXT_APP_DIR || '';

module.exports = withPlugins(
  [[withTM], withCSS],
  withImages({
    assetPrefix,
    env: {
      URL_PREFIX: assetPrefix,
      GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
    },
  }),
);
