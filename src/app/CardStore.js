'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var Immutable = require('immutable');

var CardStore = Reflux.createStore({

    init: function() {
        this.data =  Immutable.fromJS({});
    },

    getInitialState: function() {
        return this.data;
    },

    getData: function(name) {
        if(this.data.getIn([name]) != undefined) {
            return null;
        }

        var self = this;
        request
           .get('http://54.179.190.109:8080/people/' + encodeURI(name))
           .end(function(err, res){
               var response = JSON.parse(res.text);
               var sentences = [];
               if(response.snippet){
                   sentences = response.snippet.split('. ');
               }
               var snippet = sentences[0] + sentences[1] || "Not available";
               var image = response.image || null;

               self.data = self.data.setIn([name], {image: image, snippet: snippet });
               self.trigger(self.data);
           });
    }

});

module.exports = CardStore;
