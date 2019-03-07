module.exports = {
    onInput: input => {
        this.state = {
            name: input.name
        };
    },
    setName: newName => {
        this.setState("name", newName);
    }
};
