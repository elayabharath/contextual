import React, { Component }  from 'react';

import { ArticleHeader } from './ArticleHeader';
import { ArticleContent } from './ArticleContent';

export class Article extends Component {
  render() {
    return (
        <div>
            <ArticleHeader/>
            <ArticleContent articleContent={this.state.articleContent}/>
        </div>
    );
  }

  constructor() {
  	super();
  	this.state = { articleContent: 'This is a sample article provided as mock data for the contextual app.'
	};
  }
}
