/** @jsx React.DOM */
var React       = require('react'),

    sizes       = {
        'large':        'btn-lg',
        'small':        'btn-sm',
        'extraSmall':   'btn-xs'
    },
    types       = {
        'default':  'btn-default',
        'primary':  'btn-primary',
        'success':  'btn-success',
        'info':     'btn-info',
        'danger':   'btn-danger',
        'link':     'btn-link'
    };

var Button = React.createClass({
    getClasseNames: function () {
        return 'btn ' +
            (sizes[this.props.size || ''] || '') + ' ' +
            (types[this.props.type || ''] || '') + ' ' +
            (this.props.active ? 'active' : '');
    },
    render: function () {
        return (
            <button type="button" className={this.getClasseNames()}>
                {this.props.children.toString()}
            </button>
        );
    }
});

module.exports = Button;

