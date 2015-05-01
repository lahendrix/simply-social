/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home.tpl',
    'text!templates/post.tpl'
], function ($, _, Backbone, homeTemplate, postTemplate) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: _.template(homeTemplate),

        events: {
            "keydown #new-post": "_keydownNewPost"
        },

        initialize: function () {
            var post1 = new Backbone.Model({
                username: "Bob McDonald",
                postMessage: "Hello I love what you're doing with this design",
                timestamp: "3m",
                    postImage: ""
                }),
                post2 = new Backbone.Model({
                    username: "Bob McDonald",
                    postMessage: "Hello I love what you're doing with this design",
                    timestamp: "3m",
                    postImage: ""
                }),
                post3 = new Backbone.Model({
                    username: "Larry Love",
                    postMessage: "What do you think of this design",
                    timestamp: "6m",
                    postImage: ""
                }),
                post4 = new Backbone.Model({
                    username: "Mr. Higher Up",
                    postMessage: "@Larry let me know your feedback on this",
                    timestamp: "50m",
                    postImage: "somefakeimage.png"
                });
            this.posts = new Backbone.Collection([post1, post2, post3, post4]);
            this.listenTo(this.posts, 'add', this.render);
        },

        render: function () {
            this.$el.html(this.template({
                posts: this.posts.toJSON()
            }));

            return this;
        },

        _keydownNewPost: function(e) {
            var $textArea = $(e.currentTarget),
                val = $textArea.val();

            if (e.keyCode == 13) {

                if (!e.shiftKey) {
                    var model = new Backbone.Model({
                        username: "Bob McDonald",
                        postMessage: val.substring(0, val.length - 1),
                        timestamp: "0m",
                        postImage: ""
                    });
                    this.posts.add(model);
                }
            }
        }
    });

    return HomeView;
});
