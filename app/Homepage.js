var React = require('react');

var Homepage = React.createClass({

	render: function() {

		var text = "Context.in";
        return (
			<div className="container">
				<div className="header">
				    <img src="header-img.png" />
				</div>
	            <div className="article-input">
	                <div>Paste URL of an article to read</div>
	                <input type="text" placeholder="e.g. http://www.newyorker.com/magazine/2015/02/23/shape-things-come"/><button>Read</button>
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
