module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: () => ({}),

    init: () => {
        this.fooClicked = false;
        this.barClicked = false;
    },

    handleFooClick: () => {
        this.fooClicked = true;
    },

    handleBarClick: () => {
        this.barClicked = true;
    }
});
