module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    init: () => {
        window.fooWidget = this;
    }
});
