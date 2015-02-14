var React = require('react'),
    mui = require('material-ui'),
    navigate = require('react-mini-router').navigate,
    _gt = require('../i18n/gettext')
    ;

var menuItems = [
    {text: _gt("Books"), route: '/books/'},
    {text: _gt("Authors"), route: '/authors/'}
];

var Nav = React.createClass({
    render: function () {
        //<img src="https://escalibro.com/static/img/logo.png" height="64px" />
        var header = (
            <div className="logo">
                    Escalibro
            </div>);
        return (
            <mui.LeftNav header={header} ref="_LeftNav" docked={false}
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

