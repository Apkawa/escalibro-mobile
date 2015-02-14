'use strict';
var React = require('react'),
    mui = require('material-ui'),
    _ = require('lodash'),
    navigate = require('react-mini-router').navigate,
    api = require('../api/main'),

    Book = require('./Book.jsx')
    ;


var Books = React.createClass({
    render: function () {
        var self = this;
        var books = api.Book.getBooks();
        books = _.map(books, function (data) {
            return <Book data={data} onClick={self._onClickItem}/>

        });
        books.push(books[0]);
        books.push(books[0]);
        books.push(books[0]);
        books.push(books[0]);
        return (
            <div>
                {books}
            </div>

        );
    },


    _onClickItem: function (e, props) {
        navigate('/books/' + props.data.id);
    }


});

module.exports = Books;