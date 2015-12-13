import React, { Component }  from 'react';

export class ArticleContent extends Component {
  render() {

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
}
