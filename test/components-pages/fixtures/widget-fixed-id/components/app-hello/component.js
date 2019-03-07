module.exports = {
    onInput: function(input) {
        this.name = input.name;
    },

    onMount: () => {
        this.type = "app-hello";
    }
};
