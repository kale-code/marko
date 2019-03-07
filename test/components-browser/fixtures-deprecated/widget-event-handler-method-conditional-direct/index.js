module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: () => {
        return {};
    },

    init: () => {
        this.mouseMoved = false;
    },

    handleMouseMove: () => {
        this.mouseMoved = true;
    }
});
