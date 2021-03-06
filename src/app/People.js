var React = require('react');
var CardStore = require('./CardStore.js');
var Store = require('./store.js');

var People = React.createClass({

    showCard: function(evt) {
        var element = evt.target;
        var rect = element.getBoundingClientRect();
        Store.elementPosition(rect.left, rect.top, rect.right, rect.bottom);

        this.setState({isShowingModal: true});
        Store.selectName(this.props.name);
        CardStore.getData(this.props.name);
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
