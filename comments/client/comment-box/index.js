/** @jsx React.DOM */
var React           = require('react'),

    CommentList     = require('./list'),
    CommentForm     = require('./form');

var CommentBox = React.createClass({
    getInitialState: function () {
        return { comments: this.props.comments || [] };
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.comments;
        comments.push(comment);
        this.setState({ comments: comments });
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.state.comments}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});

module.exports = CommentBox;
