
Template.post.events({
    "click #post-sub": function (e, template) {
        e.preventDefault();
        const textarea = template.find("#post-text");
        Posts.publish(textarea.value);
        textarea.value = "";
    }
});