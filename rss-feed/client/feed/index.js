/** @jsx React.DOM */
var React       = require('react'),

    feed        = require('../utils/feed'),
    FeedItem    = require('./item');

var Feed = React.createClass({
    getInitialState: function () {
        this.loadFeedFromServer();
        return { feed: { entries: [] } };
    },
    loadFeedFromServer: function () {
        feed.get(this.props.url, function (err, feed) {
            if(err) return alert('error loading feed');
            this.setState({ feed: feed });
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                {this.state.feed.entries.map(function (entry) {
                    return <FeedItem entry={entry} />
                })}
            </div>
        );
    }
});

module.exports = Feed;
