import React, { Component }  from 'react';

export class People extends Component {
    render() {
        return (
            <div className="keyword-chip">
                <span className="people">{this.props.name}</span>
            </div>
        );
    }
}
