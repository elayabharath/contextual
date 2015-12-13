import React, { Component }  from 'react';

export class ArticleHeader extends Component {
  render() {
    return (
        <div>
	        <div>{this.props.articleHeader}</div>
        </div>
    );
  }
}
