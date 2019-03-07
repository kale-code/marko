module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: () => ({}),

    init: () => {
        this.counter = 0;
    },

    handleMouseMove: (event, el) => {
        el.innerHTML = "" + this.counter++;
    }
});
