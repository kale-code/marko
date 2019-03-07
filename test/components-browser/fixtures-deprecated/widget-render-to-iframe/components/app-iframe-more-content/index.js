module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getValue: () => {
        return this.getEl("input").value;
    }
});
