module.exports = {
    onInput: () => {
        this.state = {
            counter: 0
        };
    },

    increment: () => {
        this.state.counter++;
    },

    onMount: () => {
        window.fooComponent = this;
    }
};
