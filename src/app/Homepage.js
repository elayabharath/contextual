var React = require('react');
var validUrl = require('valid-url');
var Router = require('react-router');
var Link = require('react-router').Link;

var Homepage = React.createClass({

	getInitialState: function() {
		return {error: null};
	},

	resetError: function(){
		if(this.state.error) {
			this.setState({error: null});
		}
	},

	goRead: function(event) {
		event.preventDefault();
		var url = this.refs.myTextInput.value;

		if (validUrl.isUri(url)){
	        this.setState({error: 0});
			this.props.history.pushState({url: "hello"}, '/read/', {url: encodeURI(url)});
	    } else {
	        this.setState({error: 1});
	    }
	},

	render: function() {

		return <div className="main-container">
				<div className="header">
				    <img src="./img/header-img.png" />
				</div>
	            <div className="article-input">
	                <div>Paste URL of an article to read</div>
	                <input type="text" onChange={this.resetError} ref="myTextInput"/><button onClick={this.goRead}>Read</button>
					{this.state.error ? <div><span className="url-error">Not a valid url!</span></div> : null}
					<div>
						<span>Quick examples: </span>

						<Link className="quick-read" to={{ pathname: '/read/', query: { url: "http://www.newyorker.com/magazine/2015/02/23/shape-things-come" } }}>Shape of things to come</Link>,&nbsp;

						<Link className="quick-read" to={{ pathname: '/read/', query: { url: "http://www.theguardian.com/environment/2015/nov/26/paris-climate-change-conference-circus-comes-to-town" } }}>Paris climate change talk</Link>
					</div>
	            </div>
				<div className="powered">
					<a href="https://chrome.google.com/webstore/detail/lkppkhgpnnhlchbeialcjkdokfienhli" target="_blank"><img src="./img/chrome.png" width={240}/></a>
				</div>
	            <div className="made">
					<span>Powered by <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank">Wikipedia</a></span> / &nbsp;
					<span>Made with &hearts; by <a href="https://www.facebook.com/elayabharath" target="_blank">EB</a> / <a href="https://www.facebook.com/n4nagappan" target="_blank">Nagappan</a></span>
	            </div>
	        </div>;
	}

});

module.exports = Homepage;
