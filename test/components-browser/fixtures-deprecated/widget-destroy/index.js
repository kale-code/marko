module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: (state, input) => {
        return {
            showSimple: input.showSimple == null ? true : input.showSimple
        };
    }
});
