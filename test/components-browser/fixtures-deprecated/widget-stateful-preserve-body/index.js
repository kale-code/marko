module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: () => {
        return {
            buttonLabel: "Initial Button Label"
        };
    },
    getTemplateData: state => {
        return {
            buttonLabel: state.buttonLabel
        };
    }
});
