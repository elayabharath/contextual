import React, { Component }  from 'react';

export class Sidebar extends Component {
  render() {
    return (
        <div>
	        <p>Sidebar</p>
	        <div>
		        {this.state.keywords.map((keyword) => (
		        	<p>{keyword}</p>
		        ))}
	      	</div>
      	</div>
    );
  }

  constructor() {
  	super();
  	this.state = { keywords: ['keyword1','keyword2']};
  }
}
