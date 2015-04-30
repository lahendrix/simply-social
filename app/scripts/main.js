/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        text: '../bower_components/requirejs-text/text',
        templates: './templates'
    }
});

require([
    'backbone',
    './router',
], function (Backbone, Router) {
    var router = new Router();
    router.navigate('home', {trigger: true});
    Backbone.history.start();
});
