var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// Components
var App = require('./pages/app');
var Home = require('./pages/home');
var About = require('./pages/about');
var Contact = require('./pages/contact');
var NotFound = require('./pages/notFound');

var routes = (
    <Route path="/" handler={App}>
        <Route name="home" path="/" handler={Home}/>
        <Route name="about" path="/about" handler={About}/>
        <Route name="contact" path="/contact" handler={Contact}/>
        <DefaultRoute handler={Home}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

module.exports = routes;
