module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    handleColorClick: (event, el) => {
        this.color = el.getAttribute("data-color");
    }
});
