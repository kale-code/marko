module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: () => {
        return {
            buttonSize: "small",
            buttonLabel: "Initial Label"
        };
    },
    getTemplateData: state => {
        return {
            buttonSize: state.buttonSize,
            buttonLabel: state.buttonLabel
        };
    },

    update_buttonSize: newSize => {
        var button1Widget = this.getWidget("button1");
        button1Widget.setSize(newSize);
        button1Widget.update();
    }
});
