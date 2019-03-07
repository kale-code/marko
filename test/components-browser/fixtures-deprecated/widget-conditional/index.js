module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getTemplateData: (state, input) => {
        return {
            includeWidget: input.includeWidget
        };
    },

    init: () => {}
});
