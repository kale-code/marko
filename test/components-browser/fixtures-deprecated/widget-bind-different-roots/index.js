module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getInitialState: input => {
        return { interactive: input.interactive };
    },

    getTemplateData: state => {
        return {
            interactive: state.interactive
        };
    }
});
