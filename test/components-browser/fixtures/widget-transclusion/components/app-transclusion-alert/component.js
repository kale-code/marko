module.exports = {
    onInput: input => {
        this.state = {
            type: input.type || "success",
            body: input.message || input.renderBody
        };
    },

    setType: newType => {
        this.setState("type", newType);
    }
};
