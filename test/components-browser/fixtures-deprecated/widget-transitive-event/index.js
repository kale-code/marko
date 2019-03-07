module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    handleTransitive: () => {
        window.transitiveHandled = true;
    }
});
