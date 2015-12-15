var React = require('react');
var Store = require('./store.js');

var People = React.createClass({

    showCard: function() {
        console.log("Show card: "+this.props.name);
        this.setState({isShowingModal: true});
        Store.selectName(this.props.name);
        Store.invalidateData();
        Store.getData(this.props.name);
        Store.showCard();
    },

    hideCard: function(evt) {
        Store.hideCard();
    },

    render: function() {

        return (
            <div className="keyword-chip">
                <span className="people"
                    ref="target"
                    onMouseEnter={this.showCard}
                    onMouseLeave={this.hideCard}>
                    {this.props.name}
                </span>
            </div>
        );
    }

});

module.exports = People;
