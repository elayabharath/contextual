var React = require('react');

var Article = React.createClass({

	render: function() {
        var content = this.props.article;
        var contentParagraphs = content.split("\n\n");

        var renderParagraphs = contentParagraphs.map(function(item, index){
          return <p className="article-paragraph" key={index}>
                    { contentParagraphs[index] }
                </p>;
        });

        return (
        	<div className="article-content">
    	        <div>
                    { renderParagraphs }
                </div>
            </div>
        );
	}

});

module.exports = Article;
