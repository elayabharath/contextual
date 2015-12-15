var React = require('react');
var ReaderContainer = require('./ReaderContainer.js');
var Homepage = require('./Homepage.js');

var routerModule = require('react-router');
var Router = routerModule.Router;  // component

var Route = routerModule.Route;

var App = React.createClass({

  render: function() {
    return (
      <ReaderContainer></ReaderContainer>
    );
  }
});

React.render((
  <Router>
    <Route path="/" component={Homepage} />
    <Route path="/read/:url" component={ReaderContainer} />
  </Router>
), document.body);
