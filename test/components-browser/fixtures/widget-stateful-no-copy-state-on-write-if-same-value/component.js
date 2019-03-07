module.exports = {
    onInput: input => {
        this.state = {
            size: input.size || "normal",
            label: input.label || "(no label)"
        };
    }
};
