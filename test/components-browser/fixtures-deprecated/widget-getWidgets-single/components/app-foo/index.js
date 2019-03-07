module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    init: () => {
        this.name = "app-foo";
    }
});
