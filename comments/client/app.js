/** @jsx React.DOM */
var React       = require('react'),

    CommentBox  = require('./comment-box');

var comments = [
    { author: "Pete Hunt", text: "This is one comment" },
    { author: "Jordan Walke", text: "This is *another* comment" }
];

React.renderComponent(<CommentBox comments={comments}/>, document.getElementById('content'));
