import React, { Component }  from 'react';

import { Article } from './Article';
import { Sidebar } from './Sidebar';

import request from 'superagent';

export class ReaderContainer extends Component {

    constructor() {
    	super();
    	this.state = { data : null };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var self = this;
        request
           .get('http://54.179.190.109:8080/contents')
           .end(function(err, res){
               self.setState({data: res.body});
               console.log(res.body);
           });
    }

    render() {
        if( this.state.data == null ) {
            return <div className="loading-screen">
                <p className="loading-icon"><img src="./img/loader.GIF" /></p>
            </div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
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
}
