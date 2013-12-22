/** @jsx React.DOM */
var React = require('react');

var Clock = React.createClass({
    getInitialState: function () {
        setInterval(function () {
            this.setState({ date: new Date() });
        }.bind(this), 1 * 1000);
        return { date: new Date() };
    },
    render: function () {
        return <div>{this.state.date.toString()}</div>
    }
});

module.exports = Clock;
