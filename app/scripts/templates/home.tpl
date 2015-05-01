<div id="hero">
    <div id="new-post-container">
        <input id="new-post" placeholder="What's on your mind?" autofocus="">
        <div id="new-post-actions">
            <div class="action">
                <div class="icon add-photo"></div>
                <span class="action-icon-label">Add Photo</span>
            </div>
            <div class="action">
                <div class="icon add-video"></div>
                <span class="action-icon-label">Add Video</span>
            </div>
        </div>
    </div>
</div>
<div class="home-post-container">
    <% _.each(posts, function(post) { %>
    <div class="post">
        <div class="avatar"></div>
        <div class="post-content">
            <span class="username"><%=post.username%></span>
            <div class="post-action-container pull-right">
                <div class="post-action post-reply"></div>
                <div class="post-action post-like"></div>
                <span><%=post.timestamp%></span>
            </div>
            <p><%=post.postMessage%></p>
        </div>
        <% if (post.postImage.length > 0) { %>
        <div class="post-image">
            <img src="http://lorempixel.com/400/200"/>
        </div>
        <% } %>
    </div>
    <% }); %>
</div>
