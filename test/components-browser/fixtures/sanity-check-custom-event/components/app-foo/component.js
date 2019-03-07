module.exports = {
    emitTestEvent: () => {
        this.emit("test", "abc", "123");
    }
};
