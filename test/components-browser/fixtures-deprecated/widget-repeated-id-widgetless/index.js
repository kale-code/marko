var widgetLessRenderer = require("./components/app-widgetless/renderer");
var simpleRenderer = require("./components/app-simple").renderer;

module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getTemplateData: () => {
        return {
            renderers: [widgetLessRenderer, widgetLessRenderer, simpleRenderer]
        };
    }
});
