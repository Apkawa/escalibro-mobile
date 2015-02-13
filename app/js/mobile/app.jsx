var React = require('react'),
    RouterMixin = require('react-mini-router').RouterMixin,
    Container = require('./container.jsx')
    ;


var App = React.createClass({
        mixins: [RouterMixin],
        routes: {
            '/': 'home',
            '/message/:text': 'message'
        },
        render: function () {
            return (
                this.renderCurrentRoute()

            );
        },
        home: function () {
            var page_title = "Home";
            return (
                <Container title={page_title}>
                    <div className="center">
                        <h1> {page_title} </h1>
                    </div>
                </Container>
            );
        }
        ,
        message: function (text) {
            return <div>{text}</div>;
        }
        ,
        notFound: function (path) {
            return <div class="not-found">Page Not Found: {path}</div>;
        }
    })
    ;


module.exports = App;
