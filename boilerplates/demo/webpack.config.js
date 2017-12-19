
module.exports = function (webpackConfig, env) {
  webpackConfig.module.rules.forEach((r) => {
    if (r.loader === 'babel') {
      r.options.plugins.push('transform-runtime');
      r.options.plugins.push(['import', { libraryName: 'antd', style: 'css' }]);
      if (env === 'development') {
        r.options.plugins.push('dva-hmr');
      }
    }
  });

  webpackConfig.output.libraryTarget = 'amd';
  webpackConfig.externals = [
    function (context, request, callback) {
      // Every module prefixed with "global-" becomes external
      // "global-abc" -> abc
      if (/^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri\//.test(request)
      ) {
        return callback(null, 'amd ' + request);
      }
      callback();
    },
  ];

  return webpackConfig;
};
