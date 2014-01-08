/** @jsx React.DOM */
// body/input.js

var React = require('react');

var Input = React.createClass({
    render: function () {
        return (
            <form id="todo-form">
                <input type="checkbox" id="toggle-all" />
                <input type="text" id="new-todo" placeholder="What needs to be done?" autoFocus/>
            </form>
        );
    }
});

module.exports = Input;
