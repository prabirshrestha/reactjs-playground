/** @jsx React.DOM */
var React           = require('react'),

    CommentList     = require('./list'),
    CommentForm     = require('./form');

var CommentBox = React.createClass({
    getInitialState: function () {
        return { comments: this.props.comments || [] };
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.state.comments}/>
                <CommentForm/>
            </div>
        );
    }
});

module.exports = CommentBox;
