module.exports = {
    onInput: input => {
        this.state = {
            colors: input.colors || []
        };
    },

    addColor: color => {
        this.state.colors.push(color);
        this.setStateDirty("color");
    }
};
