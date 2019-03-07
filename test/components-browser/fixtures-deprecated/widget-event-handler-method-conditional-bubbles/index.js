module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: () => {
        return {};
    },

    init: () => {
        this.clicked = false;
    },

    handleButtonClick: () => {
        this.clicked = true;
    }
});
