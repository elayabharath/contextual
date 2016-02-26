var React = require('react');
var ReaderContainer = require('./ReaderContainer.js');
var Homepage = require('./Homepage.js');
var ReactDOM = require('react-dom');
var routerModule = require('react-router');
var browserHistory = routerModule.browserHistory;
var hashHistory = routerModule.hashHistory;
var Router = routerModule.Router;  // component
var Route = routerModule.Route;

var App = React.createClass({

  render: function() {
    return (
      <ReaderContainer></ReaderContainer>
    );
  }
});

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Homepage} />
      <Route name="read" path="/read" component={ReaderContainer} />
    </Router>
), document.getElementById("contextualapp"));
