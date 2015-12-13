/** @jsx React.DOM */
var React = require('react');
var ReaderContainer = require('./ReaderContainer.js');
var request = require('superagent');
var jsonp = require('superagent-jsonp');

var App = React.createClass({

	render: function() {
		return (
			<ReaderContainer />
		);
	}

});

module.exports = App;
