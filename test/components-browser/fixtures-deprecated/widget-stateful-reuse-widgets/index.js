module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getInitialState: input => {
        return {
            buttonSize: input.buttonSize || "normal"
        };
    },
    getTemplateData: state => {
        return {
            buttonSize: state.buttonSize
        };
    },

    setButtonSize: size => {
        this.setState("buttonSize", size);
    },
    init: () => {}
});
