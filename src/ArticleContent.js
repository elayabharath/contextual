import React, { Component }  from 'react';

export class ArticleContent extends Component {
  render() {
    return (
    	<div>
	        <div>{this.props.articleContent}</div>
        </div>
    );
  }
}
