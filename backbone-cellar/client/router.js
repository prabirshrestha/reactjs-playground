/** @jsx React.DOM */
var Backbone        = require('backbone'),
    React           = require('react'),

    Hello           = require('./hello');

// http://stackoverflow.com/a/19529354
Backbone.$ = require('jquery');

var Router = Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    index: function () {
        React.renderComponent(<Hello/>, document.body);
    }

});

module.exports = Router;
