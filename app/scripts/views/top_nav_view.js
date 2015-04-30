/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var TopNavView = Backbone.View.extend({
        el: "#header-nav",

        events: {
            "click .new-message": "_toggleNewMessageModal",
            "click .bg": "_closeNewMessageModal"
        },

        _toggleNewMessageModal: function() {
            $(".message-panel").toggleClass("show");
        },

        _closeNewMessageModal: function() {
            $(".message-panel").removeClass("show");
        }
    });

    return TopNavView;
});
