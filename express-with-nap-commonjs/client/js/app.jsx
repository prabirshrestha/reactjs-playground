/** @jsx React.DOM */
var React = require('react'),
    Hello = require('./hello');

module.exports = function (element) {
    React.renderComponent(<Hello/>, element);
};
