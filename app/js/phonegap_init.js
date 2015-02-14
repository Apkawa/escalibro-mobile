'use strict';

function init () {

    if (init.called) {
        return;
    }

    init.called = true;

    require('./main.jsx');

};


init.called = false;

// Девайс готов, этого события нет в браузере
document.addEventListener("deviceready", init, true);

