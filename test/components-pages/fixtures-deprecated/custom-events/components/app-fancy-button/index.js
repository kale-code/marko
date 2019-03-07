module.exports = require("marko-widgets").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: (state, input) => ({ label: input.label }),

    emitPressEvent: function() {
        this.emit("press", { widget: this });
    }
});
