module.exports = {
    onInput: () => {
        this.string = "world";
        this.number = 12;
        this.boolean = true;
        this.complex = {
            a: '<"hello">',
            b: "test"
        };
    },

    onMount: () => {
        this.name = "app-component-config";
    }
};
