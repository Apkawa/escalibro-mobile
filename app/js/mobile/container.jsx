var React = require('react'),
    mui = require('material-ui'),
    AppBar = mui.AppBar,
    AppCanvas = mui.AppCanvas,
    Nav = require('./nav.jsx')
    ;

var Container = React.createClass({
    render: function () {
        return (
            <AppCanvas predefinedLayout={1}>
                <AppBar title={this.props.title} onMenuIconButtonTouchTap={this._showleftNav}>
                </AppBar>
                <Nav  ref="LeftNav"/>
                <div className="mui-app-content-canvas">
                    {this.props.children}
                </div>
            </AppCanvas>
        );
    },
    _showleftNav: function () {
        this.refs.LeftNav.toggle();
    }
});

module.exports = Container;