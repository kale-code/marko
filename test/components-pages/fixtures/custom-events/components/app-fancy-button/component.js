module.exports = {
    emitPressEvent: () => {
        this.emit("press", { component: this });
    }
};
