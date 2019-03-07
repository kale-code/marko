module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getInitialState: input => {
        return {
            version: input.version,
            id: input.id
        };
    },
    getTemplateData: state => {
        return {
            version: state.version,
            id: state.id
        };
    },
    init: () => {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder = window.rerenderInitOrder || [];
        window.rerenderInitOrder.push(this.state.id);
    },
    onUpdate: () => {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder.push(this.state.id);
    }
});
