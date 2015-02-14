'use strict';
var mockup = require('./mockup'),
    _ = require('lodash')
;

var Book = (function () {

    var getBook = function (id) {
        return mockup.Books[id];
    };

    var getBooks = function () {
        return _.map(mockup.Books)
    };

    return {
        getBook: getBook,
        getBooks: getBooks
    }

}());


module.exports = Book;