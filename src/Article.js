import React, { Component }  from 'react';

import { ArticleHeader } from './ArticleHeader';
import { ArticleContent } from './ArticleContent';

export class Article extends Component {
    render() {
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

    constructor() {
    	super();
    }
}
