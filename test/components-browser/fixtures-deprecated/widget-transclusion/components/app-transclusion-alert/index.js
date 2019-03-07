module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getInitialState: input => {
        var type = input.type || "success";

        return {
            type: type
        };
    },

    getInitialBody: input => {
        return input.message || input.renderBody;
    },

    getTemplateData: state => {
        var type = state.type;

        var className = "alert alert-" + type;

        return {
            className: className,
            type: type
        };
    },

    setType: newType => {
        this.setState("type", newType);
    }
});
