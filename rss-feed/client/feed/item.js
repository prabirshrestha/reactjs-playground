/** @jsx React.DOM */
var React = require('react');

var FeedItem = React.createClass({
    render: function () {
        return (
            <div>
                <a href={this.props.entry.link}>{this.props.entry.title}</a>
            </div>
        );
    }
});

module.exports = FeedItem;
