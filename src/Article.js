import React, { Component }  from 'react';

import { ArticleHeader } from './ArticleHeader';
import { ArticleContent } from './ArticleContent';

export class Article extends Component {
  render() {
    return (
        <div>
            <ArticleHeader/>
            <ArticleContent/>
        </div>
    );
  }
}
