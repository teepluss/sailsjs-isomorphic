var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    var params = state.params;
    ReactDOM.render(<Handler  params={params} />, document.getElementById('content'));
});

