module.exports = {
    emitTestEvent1: () => {
        this.emit("testEvent", "a", "b");
    },

    emitTestEvent2: () => {
        this.emit("testEvent");
    }
};
