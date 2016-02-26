var React = require('react');
var Reflux = require('reflux');
var Store = require('./store.js');
var CardStore = require('./CardStore.js');
var request = require('superagent');
var Immutable = require('immutable');

var PeopleCard = React.createClass({

    mixins: [Reflux.connect(CardStore,"data"), Reflux.connect(Store, "name")],

    render: function() {
        var renderData = this.state.data.getIn([this.state.name.name]);

        if(renderData == undefined || !renderData) {
            return <div className="people-card" style={{left: this.state.name.position.x, top: this.state.name.position.y}}>
                Searching wikipedia ..
            </div>;
        }

        return (
            <div className="people-card" style={{left: this.state.name.position.x, top: this.state.name.position.y}}>
                {renderData.image ? <div className="people-image" style={{backgroundImage: "url('"+renderData.image+"')", width: "292px", height: "240px"}}></div> : null }
                <div>{renderData.snippet}</div>
            </div>
        );
    }
});

module.exports = PeopleCard;
