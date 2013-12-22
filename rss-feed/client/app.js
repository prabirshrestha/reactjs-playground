/** @jsx React.DOM */
var React    = require('react'),

    Feed     = require('./feed'),

    feedUrl  = 'http://thehimalayantimes.com/rss_2.php';

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Feed url={feedUrl}/>
            </div>
        );
    }
});

React.renderComponent(<App/>, document.body);
