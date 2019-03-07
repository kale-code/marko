module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getInitialState: input => {
        return {
            name: input.name,
            messageCount: input.messageCount
        };
    },

    getTemplateData: state => {
        return {
            name: state.name,
            messageCount: state.messageCount
        };
    },

    setName: newName => {
        this.setState("name", newName);
    }
});
