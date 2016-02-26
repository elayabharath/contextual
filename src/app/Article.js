var React = require('react');
var ArticleHeader = require('./ArticleHeader.js');
var ArticleContent = require('./ArticleContent.js');

var Article = React.createClass({

	render: function() {
		return (
            <div>
                <ArticleHeader
                    header = {this.props.header}
                    description = {this.props.description}
                    image={this.props.image}/>
                <ArticleContent article = {this.props.article}/>
            </div>
		);
	}

});

module.exports = Article;
