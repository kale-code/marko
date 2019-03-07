var barRenderer = require("./components/app-bar/renderer").render;

module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getTemplateData: () => {
        return {
            barRenderer: barRenderer,
            barWidgetId: "myBar"
        };
    }
});
