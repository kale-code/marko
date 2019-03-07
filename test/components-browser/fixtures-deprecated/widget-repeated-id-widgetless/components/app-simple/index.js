module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: (state, input) => ({
            name: input.name,
            messageCount: input.messageCount
        })
});
