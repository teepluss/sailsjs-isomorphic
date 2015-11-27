/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var React = require('react');
var Router = require('react-router');
var ReactDOMServer = require('react-dom/server');

// require('node-jsx').install({
//     extension: '.jsx'
// });

require('node-jsx').install();

var routes = require('../components/routes');

module.exports = {
	home : function(req, res) {
    Router.run(routes, req.url, function(Handler, state) {
        var params = state.params;
        var App = React.createElement(Handler, params);
        res.view('layout', {
          body: ReactDOMServer.renderToString(App)
        })
    });
  }
};

