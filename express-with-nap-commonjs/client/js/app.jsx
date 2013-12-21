/** @jsx React.DOM */
var React = require('react'),
    Hello = require('hello');

module.exports = function () {
    React.renderComponent(<Hello/>, document.body);
};
