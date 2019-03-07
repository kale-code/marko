module.exports = {
    onInput: input => {
        this.name = input.name;
    },

    onMount: () => {
        this.type = "app-hello";
    }
};
