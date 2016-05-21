var fs = require('fs');
var appRoot = require('app-root-path');
var phantom = appRoot.require('lib/parser/phantom');
var _ = require('lodash');

module.exports = function (app) {
  app.get('/social', function (req, res) {
    var query = _.clone(req.query);
    var path = query.path || '/';
    if (_.isArray(path)) {
      // Rare case when the `path` GET param may be added twice somehow
      var path0 = path[0];
      var path1 = path[1];
      path = path0;
      query.path = path1;
    } else {
      delete query.path;
    }

    var env = process.env.NODE_ENV || 'development';

    fs.readFile(appRoot + '/config/' + env + '.json', 'UTF8', function (err, config) {
      if (err) {
        return res.status(500).send('Invalid app environment.');
      }
      config = JSON.parse(config).SiteConfig;
      if (!config || !config.siteDomain) {
        return res.status(500).send('Invalid app config.');
      }

      var domain = config.siteDomain;
      if (env === 'development' && query.port) {
        domain += ':' + query.port;
        delete query.port;
      }

      var base = 'http://' + domain + '/';
      if (path.charAt(0) === '/') {
        path = path.substr(1);
      }
      var url = base + path;

      var params = [];
      _.each(query, function (v, k) {
        params.push(k + '=' + v);
      });
      if (params.length) {
        url += (url.indexOf('?') > -1 ? '&' : '?') + params.join('&');
      }

      phantom.eval(url, base).catch(function (e) {
        console.error(e);
        console.log(req.query);
        res.status(422).end();
      }).then(function (html) {
        res.send(html);
      });
    });
  });
};
