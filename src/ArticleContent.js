import React, { Component }  from 'react';

export class ArticleContent extends Component {
  render() {
    return (
    	<div>
	        <p>Article Content</p>
	        <div>{this.props.articleContent}</div>
        </div>
    );
  }
}
