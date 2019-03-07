module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: input => {
        return {
            colors: input.colors || []
        };
    },
    getTemplateData: state => {
        return {
            colors: state.colors
        };
    },

    addColor: color => {
        this.state.colors.push(color);
        this.setStateDirty("color");
    }
});
