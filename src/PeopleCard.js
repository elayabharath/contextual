import React, { Component }  from 'react';

import request from 'superagent';

export class PeopleCard extends Component {

    fetchData() {
        var self = this;
        request
           .get('http://54.179.190.109:8080/people')
           .request({q: this.props.name})
           .end(function(err, res){
               console.log(res.body);
           });
    }

    render() {
        return (
            <div className="people-card">
                <div className="people-image" style={{background: "url('https://upload.wikimedia.org/wikipedia/commons/7/7d/Jonathan_Ive_%28OTRS%29.jpg')", height: "320px", backgroundSize: 'cover'}}></div>
                <div>Name: Jony Ive</div>
                <div>Age: 29</div>
                <div>Country: UK</div>
            </div>
        );
    }
}
