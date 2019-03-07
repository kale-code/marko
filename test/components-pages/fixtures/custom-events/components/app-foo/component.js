module.exports = {
    onMount: () => {
        window.fooComponent = this;
        this.pressEvent = undefined;
    },

    handleButtonPress: () => {
        this.pressEvent = arguments;
    }
};
