'use strict';

var Reflux = require('reflux');
var request = require('superagent');

var Store = Reflux.createStore({

    init: function() {
        this.data = {
            name: "",
            isCardOpen: false,
            data: {
                image: null,
                snippet: "Loading .."
            },
            position: {
                x: null,
                y: null
            }
        };
    },

    invalidateData: function() {
        this.data.data = {image: null, snippet: "Loading .."};
        this.trigger(this.data);
    },

    getData: function(name) {
        console.log("getting data");
        var self = this;
        request
           .get('http://54.179.190.109:8080/people/' + encodeURI(name))
           .end(function(err, res){
               console.log("request finished");
               var response = JSON.parse(res.text);
               console.log(response);
               self.data.data.snippet = response.snippet || "Not available";
               self.data.data.image = response.image || null;
               self.trigger(self.data);
           });
    },

    getInitialState: function() {
        return this.data;
    },

    selectName: function(name) {
        this.data.name = name;
        this.trigger(this.data);
    },

    showCard: function() {
        this.data.isCardOpen = true;
        this.trigger(this.data);
    },

    hideCard: function() {
        this.data.isCardOpen = false;
        this.trigger(this.data);
    },

    elementPosition: function(left, top, right, bottom) {
        var x = left - 330;
        var y = top;

        console.log(this.data.position);
        if(x < 0) {
            x = right + 10;
        }

        if(y + 320 > document.body.getBoundingClientRect().height) {
            y = document.body.getBoundingClientRect().height - 320;
        }

        this.data.position = {x: x, y: y};
        this.trigger(this.data);
    }

});

module.exports = Store;
