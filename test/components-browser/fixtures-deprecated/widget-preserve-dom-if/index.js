module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getTemplateData: (state, input) => {
        return {
            preserveCondition: input.preserveCondition,
            renderId: input.renderId || 0
        };
    },
    init: () => {}
});
