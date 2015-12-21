var React = require('react');
var Article = require('./Article.js');
var Sidebar = require('./Sidebar.js');
var PeopleCard = require('./PeopleCard.js');
var Reflux = require('reflux');
var Store = require('./store.js');

var request = require('superagent');

var ReaderContainer = React.createClass({

    mixins: [Reflux.connect(Store,"storeData")],

    getInitialState: function() {
        return {data: null};
    },

    componentDidMount: function() {
        console.log(this.props.location.query);
        this.fetchData(this.props.location.query.url);
    },

    fetchData: function(url) {
        var self = this;
        request
           .get('http://54.179.190.109:8080/contents')
           .query({url: url})
           .end(function(err, res){
               self.setState({data: res.body});
               console.log(res.body);
           });
    },

    componentWillReceiveProps: function() {
        this.fetchData(this.props.location.query.url);
    },

    render: function() {
        if( this.state.data == null ) {
            return <div className="loading-screen">
                <p className="loading-icon"><img src="loading.svg" /></p>
            </div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        { this.state.storeData.isCardOpen ? <PeopleCard x={10} y={10}></PeopleCard> : null }
                        <Article
                            header={this.state.data.title}
                            image={this.state.data.image}
                            description={this.state.data.description}
                            article={this.state.data.text}/>
                    </div>
                    <div className="col-sm-4">
                        <Sidebar people={this.state.data.extractedKeywords.people} interests={this.state.data.extractedKeywords.interest}/>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = ReaderContainer;
