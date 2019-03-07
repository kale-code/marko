module.exports = {
    onInput: function(input) {
        this.label = input.label;
    },

    onMount: function() {
        this.name = "app-bar";

        var el = this.el;

        this.appendHtml = html => {
            el.innerHTML += html;
        };
    },

    emitTestEvent: function() {
        this.emit("testEvent", "a", "b");
    }
};
