module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    getWidgetConfig: () => {
        return {
            name: "app-foo"
        };
    },

    init: widgetConfig => {
        this.widgetConfig = widgetConfig;
        window.fooWidget = this;
    }
});
