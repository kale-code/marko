module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    init: widgetConfig => {
        this.name = widgetConfig.name;
    },

    getWidgetConfig: input => {
        return {
            name: input.name
        };
    }
});
