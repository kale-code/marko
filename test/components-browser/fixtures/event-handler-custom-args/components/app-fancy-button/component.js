module.exports = {
    getTemplateData: (state, input) => ({ label: input.label }),

    emitPressEvent: function() {
        this.emit("press", { component: this });
    }
};
