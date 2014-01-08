/** @jsx React.DOM */
// body/main.js

var React       = require('react'),

    BodyFooter  = require('./footer'),
    Input       = require('./input'),
    TodoList    = require('./list');

var Body = React.createClass({
    render: function () {
        return (
            <section id="main">
                <Input/>
                <TodoList/>
                <BodyFooter/>
            </section>
        );
    }
});

module.exports = Body;
