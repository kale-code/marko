module.exports = {
    onInput: () => {
        this.state = {
            type: "state",
            name: "foo"
        };
        this.type = "config";
        this.name = "foo";
    },

    onMount: () => {
        window.fooComponent = this;
        this.componentConfig = {
            type: this.type,
            name: this.name
        };
    }
};
