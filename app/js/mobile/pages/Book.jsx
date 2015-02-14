'use strict';
var React = require('react'),
    mui = require('material-ui'),
    api = require('../api/main')
    ;

var Book = React.createClass({
    render: function () {
        var data = this.props.data;
        if (! data) {
            data = api.Book.getBook(this.props.id);
        }
        return (
            <div className='book-list-item' onClick={this._onClick}>
                <mui.Paper>
                    <img className='book-list-item-cover-image' />
                    <h3 className='book-list-item-title'>{data.title}</h3>
                    <p className='book-list-item-description'>
                {data.description}
                    </p>
                </mui.Paper>
            </div>
        );
    },

    _onClick: function (e) {
        if (this.props.onClick) {
            this.props.onClick(e, this.props);
        }
    }
});

module.exports = Book;