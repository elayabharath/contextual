import React, { Component }  from 'react';
import { People } from './People';

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" style={{height: "100%"}}>
                <p className="sidebar-title">Key People</p>
                <div>
        	        {this.props.people.map((keyword, index) => (
        	        	<People key={index} name={keyword.name} />
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
