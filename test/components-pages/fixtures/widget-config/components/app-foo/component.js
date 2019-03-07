module.exports = {
    onInput: () => {
        this.name = "app-foo";
    },

    onMount: () => {
        this.componentConfig = {
            name: this.name
        };
        window.fooComponent = this;
    }
};
