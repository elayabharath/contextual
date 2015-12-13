import React, { Component }  from 'react';

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <p className="sidebar-title">Key People</p>
                <div>
        	        {this.props.people.map((keyword, index) => (
        	        	<p key={index}>{keyword.name}</p>
        	        ))}
              	</div>
                <p className="sidebar-title">Interests</p>
                <div>
                    {this.props.interests.map((keyword, index) => (
        	        	<p key={index}>{keyword.name}</p>
        	        ))}
                </div>
          	</div>
        );
    }
}
