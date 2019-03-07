module.exports = {
    onInput: input => {
        this.state = {
            size: input.size || "normal",
            variant: input.variant || "primary"
        };
    }
};
