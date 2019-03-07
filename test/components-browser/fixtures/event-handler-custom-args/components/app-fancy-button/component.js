module.exports = {
    getTemplateData: (state, input) => ({ label: input.label }),

    emitPressEvent: () => {
        this.emit("press", { component: this });
    }
};
