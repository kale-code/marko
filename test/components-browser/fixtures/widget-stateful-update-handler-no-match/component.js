module.exports = {
    onInput: () => {
        this.state = {
            buttonSize: "small",
            buttonLabel: "Initial Label"
        };
    },

    update_buttonSize: function(newSize) {
        var button1Component = this.getComponent("button1");
        button1Component.setSize(newSize);
    }
};
