var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1>Head</h1>
          <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
          </ul>
       </header>
    )
  }
})

module.exports = Header;
