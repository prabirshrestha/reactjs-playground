var Backbone    = require('backbone'),

    Router      = require('./router');

var App = {};

App.router = new Router();
Backbone.history.start();

