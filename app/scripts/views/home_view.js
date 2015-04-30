/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home.tpl'
], function ($, _, Backbone, homeTemplate) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: _.template(homeTemplate),

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
