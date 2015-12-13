var React = require('react');
var Reflux = require('reflux');
var Store = require('./store.js');
var request = require('superagent');

var PeopleCard = React.createClass({

    mixins: [Reflux.connect(Store,"data")],

    fetchData: function() {
        var self = this;
        request
           .get('http://54.179.190.109:8080/people/' + encodeURI(this.state.data.name))
           .end(function(err, res){
               console.log(res.body);
           });
    },

    render: function() {
        this.fetchData();
        return (
            <div className="people-card">
                <div className="people-image" style={{background: "url('https://upload.wikimedia.org/wikipedia/commons/7/7d/Jonathan_Ive_%28OTRS%29.jpg')", height: "240px", backgroundSize: 'cover'}}></div>
                <div>Name: Jony Ive</div>
                <div>Age: 29</div>
                <div>Country: UK</div>
            </div>
        );
    }
});

module.exports = PeopleCard;
