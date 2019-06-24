// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
// const withSass = require('@zeit/next-sass');
// const debug = process.env.NODE_ENV !== 'production';

// const compose = require('next-compose');

// module.exports = compose([
//   [withSass],
//   { 
//     exportPathMap: function () {
//       return {
//         '/': { page: '/' },
//         '/about': { page: '/about' }
//       }
//     },
//     assetPrefix: !debug ? '/Next-gh-page-example/' : ''
//   }
// ]);

// const path = require('path');
// const Dotenv = require('dotenv-webpack');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withSASS = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

// const map = {
//   production: 'prod',
//   development: 'dev',
//   qa: 'qa',
// };

const assetPrefix =
  process.env.NODE_ENV !== 'production'
    ? undefined
    : '/Next-gh-page-example/';

const webpackConfigModifier = config => {
  // const sassPatterns = [/\.scss$/, /\.sass$/].map(x => x.toString());

  // config.module.rules = config.module.rules.map(rule => {
  //   if (sassPatterns.includes(rule.test.toString())) {
  //     return {
  //       ...rule,
  //       use: [
  //         ...rule.use,
  //         {
  //           loader: 'sass-resources-loader',
  //           options: {
  //             resources: [],
  //             // resources: ['./scss/_variables.scss', './scss/mixins.scss'],
  //           },
  //         },
  //       ],
  //     };
  //   }

  //   return rule;
  // });

  // eslint-disable-next-line no-param-reassign
  // config.plugins = [
  //   ...(config.plugins ? config.plugins : []),
  //   new Dotenv({
  //     path: path.resolve(
  //       __dirname,
  //       `env/.${process.env.BUILD_ENV || process.env.NODE_ENV || 'development'}`
  //     ),
  //     systemvars: true,
  //   }),
  // ];

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          fallback: 'file-loader',
          publicPath: `${assetPrefix || ''}/_next/static/`,
          outputPath: 'static/',
          // name: '[name]-[hash].[ext]',
        },
      },
    },
  ];

  return config;
};

const nextConfig = {
  webpack: webpackConfigModifier,
};

const moduleTranspilation = [
  withTM
];

const sass = [
  withSASS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      camelCase: true,
    },
  },
];

const css = [withCSS, { cssModules: false }];
const plugins = [moduleTranspilation, sass, css];

module.exports = withPlugins(plugins, nextConfig);
