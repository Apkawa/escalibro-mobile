var React = require('react'),
    mui = require('material-ui'),
    Nav = require('./nav.jsx')
    ;

var Container = React.createClass({
    render: function () {
        var title = '';
        if (this.props.title) {
            title = this.props.title;
        }
        return (
            <mui.AppCanvas predefinedLayout={1}>
                <mui.AppBar
                    title={title}
                    onMenuIconButtonTouchTap={this._showleftNav}>
                </mui.AppBar>
                <Nav ref="LeftNav"/>
                <div className="mui-app-content-canvas">
                    {this.props.children}
                </div>
            </mui.AppCanvas>
        );
    },
    _showleftNav: function () {
        this.refs.LeftNav.toggle();
    }
});

module.exports = Container;