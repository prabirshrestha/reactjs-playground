/** @jsx React.DOM */
var React = require('react');

var CommentForm = React.createClass({
    handleSubmit: function () {
        var $author         = this.refs.author.getDOMNode(),
            $text           = this.refs.text.getDOMNode(),

            author          = $author.value.trim(),
            text            = $text.value.trim();

        if(!author || !text) {
            return false;
        }

        if(this.props.onCommentSubmit) {
            this.props.onCommentSubmit({ author: author, text: text });
        }

        $author.value = '';
        $text.value = '';

        return false;
    },
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="Your name"/>
                <input type="text" ref="text" placeholder="Say Something ..."/>
                <input type="submit" value="Post"/>
            </form>
        );
    }
});

module.exports = CommentForm;
