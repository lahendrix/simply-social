/*global define*/

define([
    'jquery',
    'backbone',
    'views/top_nav_view',
    'views/home_view',
    'views/settings_view'
], function ($, Backbone, TopNavView, HomeView, SettingsView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({

        initialize: function() {
            this.topNavView = new TopNavView();
        },

        routes: {
            '': 'showHomeView',
            'settings': 'showSettingsView'
        },

        showHomeView: function () {

            var homeView = new HomeView();
            homeView.render();
            $('#main').html(homeView.$el);

        },

        showSettingsView: function() {
            var settingsView = new SettingsView();
            settingsView.render();
            $('#main').html(settingsView.$el);
        }

    });

    return MainRouter;
});
