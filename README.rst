Install
=======

::

    npm install
    npm start # or gulp watch


Look to ``dest/index.html``



Build phonegap
==============

Look documentation http://docs.phonegap.com/en/edge/index.html

::

    npm install -g phonegap cordova
    gulp phonegap default
    cd phonegap
    cordova platform add android
    cordova emulate android



Build crosswalk
===============

Look documentation https://crosswalk-project.org/documentation/cordova/develop_an_application.html

::
    export JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")

    gulp crosswalk default
    cd crosswalk
    ./cordova/run
