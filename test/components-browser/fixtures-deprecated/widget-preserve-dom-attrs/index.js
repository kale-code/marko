module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    init: () => {},
    getInitialState: () => {
        return {
            name: "Joe"
        };
    },

    getTemplateData: function(state) {
        return state;
    }
});
