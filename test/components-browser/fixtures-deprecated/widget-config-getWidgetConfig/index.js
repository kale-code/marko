module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getWidgetConfig: input => {
        return {
            string: input.name,
            number: 12,
            boolean: true,
            complex: {
                a: '<"hello">',
                b: "test"
            }
        };
    },

    init: config => {
        this.config = config;
    }
});
