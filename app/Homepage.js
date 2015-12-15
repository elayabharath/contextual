var React = require('react');
var validUrl = require('valid-url');
var Router = require('react-router');

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
		var url = this.myTextInput.getDOMNode().value;

		if (validUrl.isUri(url)){
	        this.setState({error: 0});
			console.log("Valid url");
			this.props.history.pushState({url: "hello"}, '/read/', {url: encodeURI(url)});
	    } else {
	        this.setState({error: 1});
	    }
	},

	render: function() {

        return (
			<div className="main-container">
				<div className="header">
				    <img src="header-img.png" />
				</div>
	            <div className="article-input">
	                <div>Paste URL of an article to read</div>
	                <input type="text" onChange={this.resetError} ref={(ref) => this.myTextInput = ref} placeholder="e.g. http://www.newyorker.com/magazine/2015/02/23/shape-things-come"/><button onClick={this.goRead}>Read</button>
					{this.state.error ? <div><span className="url-error">Not a valid url!</span></div> : null}
	            </div>
	            <div className="powered">
	                <div>Powered by</div>
	                <span><a href="" target="_blank">Wikipedia</a>   ·   <a href="" target="_blank">node-unfluf</a>   ·   <a href="" target="_blank">node-natural</a></span>
	            </div>
	            <div className="made">
					<span>Made with <span style={{fontFamily: 'serif'}}>♥</span> by <a href="https://www.facebook.com/elayabharath" target="_blank">EB</a> / <a href="https://www.facebook.com/n4nagappan" target="_blank">Nagappan</a></span>
	            </div>
	        </div>
        );
	}

});

module.exports = Homepage;
