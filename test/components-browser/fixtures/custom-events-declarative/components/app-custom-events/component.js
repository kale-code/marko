var pubsub = require("../../../../../__util__/pubsub");

module.exports = {
    onInput: input => {
        this.name = input.name;
        this.channel = input.channel;
    },

    onMount: () => {
        var self = this;

        if (this.channel) {
            pubsub.channel(this.channel).on("emitTestEvent2", () => {
                self.emitTestEvent2();
            });
        }
    },

    emitTestEvent1: () => {
        this.emit("testEvent", "a", "b");
    },

    emitTestEvent2: () => {
        this.emit("testEvent");
    }
};
