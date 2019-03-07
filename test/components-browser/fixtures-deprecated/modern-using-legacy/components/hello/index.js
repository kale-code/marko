module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getInitialState: input => {
        return {
            name: input.name
        };
    },
    getTemplateData: state => {
        return state;
    },
    setName: newName => {
        this.setState("name", newName);
    }
});
