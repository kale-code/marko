var pubsub = require("../../../../../__util__/pubsub");

function Widget(config) {
    this.name = config.name;
    var self = this;

    if (config.channel) {
        pubsub.channel(config.channel).on("emitTestEvent2", () => {
            self.emitTestEvent2();
        });
    }
}

Widget.prototype = {
    emitTestEvent1: () => {
        this.emit("testEvent", "a", "b");
    },

    emitTestEvent2: () => {
        this.emit("testEvent");
    }
};

exports.Widget = Widget;
