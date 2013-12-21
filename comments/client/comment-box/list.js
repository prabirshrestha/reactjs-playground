/** @jsx React.DOM */
var React       = require('react'),

    Comment     = require('./comment');

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                {this.props.comments.map(function (comment) {
                    return <Comment author={comment.author}>{comment.text}</Comment>
                })}
            </div>
        );
    }
});

module.exports = CommentList;
