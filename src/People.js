import React, { Component }  from 'react';

export class People extends Component {

    constructor() {
    	super();
    	this.state = { isShowingModal : false };
        this.showCard = this.showCard.bind(this);
        this.hideCard = this.hideCard.bind(this);
    }

    toggleCard() {
        this.setState({isShowingModal: !this.state.isShowingModal});
    }

    showCard() {
        this.setState({isShowingModal: true});
    }

    hideCard(evt) {
        this.setState({isShowingModal: false});
    }

    render() {
        return (
            <div className="keyword-chip">
                <span className="people">{this.props.name}</span>
            </div>
        );
    }
}
