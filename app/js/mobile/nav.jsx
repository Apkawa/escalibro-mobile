var React = require('react'),
    mui = require('material-ui'),
    navigate = require('react-mini-router').navigate,
    LeftNav = mui.LeftNav
    ;

var menuItems = [
    {text: "Settings", route: '/message/Settings'},
    {text: "Logout", route: '/'}
];

var Nav = React.createClass({
    render: function () {
        //<img src="https://escalibro.com/static/img/logo.png" height="64px" />
        var header = (
            <div className="logo">
                    Escalibro
            </div>);
        return (
            <LeftNav header={header} ref="_LeftNav" docked={false}
                menuItems={menuItems} onChange={this.onChange}/>
        );
    },

    onChange: function (e, selectedIndex, menuItem) {
        navigate(menuItem.route);
    },

    toggle: function () {
        this.refs._LeftNav.toggle();
    }

});


module.exports = Nav;

