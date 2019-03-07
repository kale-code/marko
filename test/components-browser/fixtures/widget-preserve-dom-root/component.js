module.exports = {
    onInput: input => {
        this.state = {
            name: input.name,
            messageCount: input.messageCount
        };
    },

    getTemplateData: state => {
        return {
            name: state.name,
            messageCount: state.messageCount
        };
    },

    setName: newName => {
        this.setState("name", newName);
    }
};
