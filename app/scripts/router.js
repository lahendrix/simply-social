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
            this.homeView = new HomeView();
            this.settingsView = new SettingsView();
        },

        routes: {
            '': 'showHomeView',
            'settings': 'showSettingsView'
        },

        showHomeView: function () {

            this.homeView.render();
            $('#main').html(this.homeView.$el);

        },

        showSettingsView: function() {
            this.settingsView.render();
            $('#main').html(this.settingsView.$el);
        }

    });

    return MainRouter;
});
