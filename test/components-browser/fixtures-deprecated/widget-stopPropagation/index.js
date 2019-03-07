module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: function(state, input) {
        return {
            name: input.name,
            messageCount: input.messageCount
        };
    },

    init: () => {
        this.divClicked = false;
        this.buttonClicked = false;
    },

    handleDivClick: () => {
        this.divClicked = true;
    },

    handleButtonClick: function(event) {
        this.buttonClicked = true;
        event.stopPropagation();
    }
});
