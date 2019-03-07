module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: input => ({
            heading: input.heading || "",
            message: input.message || "",
            colors: input.colors || []
        }),
    getTemplateData: state => ({
            heading: state.heading,
            message: state.message,
            colors: state.colors
        })
});
