module.exports = require("marko/legacy-components").defineRenderer({
    template: require.resolve("./template.marko"),
    getTemplateData: () => {
        return {
            buttonLabel: "Initial Button Label"
        };
    }
});
