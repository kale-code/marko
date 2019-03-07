module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    getInitialState: () => {
        return {
            type: "state",
            name: "foo"
        };
    },

    getWidgetConfig: () => {
        return {
            type: "config",
            name: "foo"
        };
    },

    init: function(widgetConfig) {
        window.fooWidget = this;
        this.widgetConfig = widgetConfig;
    }
});
