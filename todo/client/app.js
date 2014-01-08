/** @jsx React.DOM */
// app.js
var React       = require('react'),

    Body        = require('./body'),
    Footer      = require('./footer'),
    Header      = require('./header');

var TodoApp = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
});

React.renderComponent(<TodoApp/>, document.body);
