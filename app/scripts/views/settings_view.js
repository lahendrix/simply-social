/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/settings.tpl'
], function ($, _, Backbone, settingsTemplate) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: _.template(settingsTemplate),

        events: {
        },

        initialize: function () {
            this.model = new Backbone.Model();
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return HomeView;
});
