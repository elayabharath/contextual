import React, { Component }  from 'react';

import { ArticleHeader } from './ArticleHeader';
import { ArticleContent } from './ArticleContent';

var header = "FIR against Aamir Khan, wife Kiran Rao over intolerance remark";

var content = "An FIR was on Friday lodged against Bollywood star Aamir Khan and his wife Kiran Rao in Bihar’s Muzaffarpur district on a court directive for their controversial remarks on intolerance.\n\nAdvocate Sudhir Kumar Ojha lodged the FIR against the actor and his wife at Town police station in Muzaffarpur district under sections 153 (Wantonly giving provocation with intent to cause riot), 153A (Promoting enmity between different groups on grounds of religion, race, place of birth, residence, language, etc), 153B (Imputations, assertions prejudicial to national-integration) and 154 (Sedition) of IPC.\n\nThe FIR was registered on the direction of the chief judicial magistrate, Muzaffarpur district, Sushma Trivedi, on a complaint filed by Mr. Ojha last week charging the actor with hurting the sentiments of the people by claiming that an atmosphere of intolerance prevailed in the country.\n\nKhan had, during a function in Delhi recently, courted controversy by saying that Kiran Rao was considering whether to move out of the country with their child due to the prevalence of an atmosphere of intolerance.";

export class Article extends Component {
  render() {
    return (
        <div>
            <ArticleHeader articleHeader = {this.state.articleHeader}/>
            <ArticleContent articleContent={this.state.articleContent}/>
        </div>
    );
  }

  constructor() {
  	super();
  	this.state = { articleHeader : header , articleContent: content
	};
  }
}
