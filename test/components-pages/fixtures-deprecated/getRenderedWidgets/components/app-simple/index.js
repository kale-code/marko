if (typeof window !== "undefined") {
    window.simpleWidgets = [];
}

module.exports = require("marko-widgets").defineComponent({
    template: require.resolve("./template.marko"),

    getWidgetConfig: input => {
        return {
            type: "widget config",
            name: input.name,
            messageCount: input.messageCount
        };
    },

    getInitialState: input => {
        return {
            type: "widget state",
            name: input.name,
            messageCount: input.messageCount
        };
    },

    getTemplateData: state => {
        return state;
    },

    init: widgetConfig => {
        window.simpleWidgets.push(this);

        this.widgetConfig = widgetConfig;
    }
});
