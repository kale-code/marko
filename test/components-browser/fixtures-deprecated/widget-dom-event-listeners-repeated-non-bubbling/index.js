module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: () => ({}),

    init: () => {
        this.counter = 0;
    },

    handleMouseMove: function(event, el) {
        el.innerHTML = "" + this.counter++;
    }
});
