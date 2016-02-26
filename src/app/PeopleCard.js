var React = require('react');
var Reflux = require('reflux');
var Store = require('./store.js');
var request = require('superagent');

var PeopleCard = React.createClass({

    mixins: [Reflux.connect(Store,"data")],

    render: function() {
        return (
            <div className="people-card" style={{left: this.state.data.position.x, top: this.state.data.position.y}}>
                {this.state.data.data.image ? <div className="people-image" style={{backgroundImage: "url('"+this.state.data.data.image+"')", width: "292px", height: "240px"}}></div> : null }
                <div>{this.state.data.data.snippet}</div>
            </div>
        );
    }
});

module.exports = PeopleCard;
