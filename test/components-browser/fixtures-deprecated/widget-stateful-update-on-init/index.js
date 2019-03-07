module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: () => {
        return { mounted: false };
    },
    init: () => {
        this.setState("mounted", true);
    }
});
