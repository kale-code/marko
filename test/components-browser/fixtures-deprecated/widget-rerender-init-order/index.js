module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getInitialState: input => {
        return {
            version: input.version
        };
    },
    getTemplateData: state => {
        return {
            version: state.version
        };
    },
    init: () => {
        window.rerenderInitOrder = window.rerenderInitOrder || [];
        window.rerenderInitOrder.push("parent");
    },
    onUpdate: () => {
        window.rerenderInitOrder.push("parent");
    }
});
