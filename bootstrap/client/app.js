/** @jsx React.DOM */
var React = require('react'),

    Button = require('./bootstrap/button');

React.renderComponent(
    <div>
        <Button size="large" type="primary">Hello</Button>
        <Button size="small" type="secondary" active="false">World</Button>
    </div>
, document.body);
