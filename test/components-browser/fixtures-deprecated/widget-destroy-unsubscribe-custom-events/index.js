module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: () => {
        return {};
    },
    getTemplateData: () => {
        return {};
    },

    destroyButton1: () => {
        this.getWidget("button1").destroy();
    },

    getButton1: () => {
        return this.getWidget("button1");
    }
});
