var React = require('react');
var Store = require('./store.js');

var Interest = React.createClass({

    showCard: function(evt) {
        var element = evt.target;
        var rect = element.getBoundingClientRect();
        Store.elementPosition(rect.left, rect.top, rect.right, rect.bottom);

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
                <span className="interest"
                    ref="target"
                    onMouseEnter={this.showCard}
                    onMouseLeave={this.hideCard}>
                    {this.props.name}
                </span>
            </div>
        );
    }

});

module.exports = Interest;
