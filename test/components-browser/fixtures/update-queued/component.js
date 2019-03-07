module.exports = {
    onInput: input => {
        this.state = {
            name: input.name
        };
    },
    setName: newName => {
        this.state.name = newName;
    }
};
