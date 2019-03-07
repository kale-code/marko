module.exports = {
    onInput: input => {
        this.state = {
            size: input.size || "normal",
            label: input.label || "(no label)"
        };
    },

    setSize: newSize => {
        this.state.size = newSize;
    },

    setLabel: newLabel => {
        this.state.label = newLabel;
    }
};
