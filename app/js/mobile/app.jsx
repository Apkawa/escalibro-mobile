var React = require('react'),
    RouterMixin = require('react-mini-router').RouterMixin,
    Container = require('./components/container.jsx'),
    _gt = require('./i18n/gettext'),
    api = require('./api/main'),
    pages = require('./pages/main')
    ;


var App = React.createClass({
        mixins: [RouterMixin],
        routes: {
            '/': 'home',
            '/books/': 'books',
            '/books/:id': 'book',
            '/message/:text': 'message'
        },
        _buildContainer: function (title, content) {
            return (
                <Container title={title}>
                {content}
                </Container>
            );

        },
        render: function () {
            return (
                this.renderCurrentRoute()
            );
        },

        home: function () {
            var page_title = _gt("Home");
            return this._buildContainer(page_title,
                <div className="center">
                    <h1> {page_title} </h1>
                </div>
            );
        }
        ,
        message: function (text) {
            return <div>{text}</div>;
        }
        ,
        books: function () {
            return this._buildContainer(
                _gt('Books'),
                <pages.Books />
            );
        },

        book: function (id) {
            var data = api.Book.getBook(id);
            return this._buildContainer(
                data.title,
                <pages.Book data={data}/>
            )
        },
        notFound: function (path) {
            return this._buildContainer(
                'Not found!',
                <div class="not-found">Page Not Found: {path}</div>
            );
        }
    })
    ;


module.exports = App;
