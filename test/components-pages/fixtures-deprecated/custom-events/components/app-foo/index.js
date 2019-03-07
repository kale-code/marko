module.exports = require("marko-widgets").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: () => ({}),

    init: () => {
        window.fooWidget = this;
        this.pressEvent = undefined;
    },

    handleButtonPress: () => {
        this.pressEvent = arguments;
    }
});
