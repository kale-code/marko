module.exports = {
    onMount: () => {
        this.pressEvent = undefined;
    },

    handleButtonPress: () => {
        this.pressEvent = arguments;
    }
};
