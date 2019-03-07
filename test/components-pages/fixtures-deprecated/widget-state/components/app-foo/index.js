module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    getInitialState: () => {
        return {
            name: "app-foo"
        };
    },

    init: () => {
        window.fooWidget = this;
    }
});
