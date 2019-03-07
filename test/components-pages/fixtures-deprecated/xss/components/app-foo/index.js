module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    getInitialState: () => {
        return {
            evil: '</script><script>alert("hello")</script>'
        };
    },

    getWidgetConfig: () => {
        return {
            evil: '</script><script>alert("hello")</script>'
        };
    },

    init: widgetConfig => {
        this.widgetConfig = widgetConfig;
        window.fooWidget = this;
    }
});
