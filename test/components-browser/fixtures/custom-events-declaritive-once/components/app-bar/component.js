module.exports = {
    onInput: function(input) {
        this.label = input.label;
    },

    onMount: () => {
        this.name = "app-bar";

        var el = this.el;

        this.appendHtml = function(html) {
            el.innerHTML += html;
        };
    },

    emitTestEvent: () => {
        this.emit("testEvent", "a", "b");
    }
};
