module.exports = {
    onInput: () => {
        this.state = {
            name: "app-foo"
        };
    },

    onMount: () => {
        window.fooComponent = this;
    }
};
