'use strict';

var Reflux = require('reflux');

var Store = Reflux.createStore({

    init: function() {
        this.data = {
            name: "",
            isCardOpen: false
        };
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
    }

});

module.exports = Store;
