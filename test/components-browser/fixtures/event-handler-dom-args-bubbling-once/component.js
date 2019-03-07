module.exports = {
    onMount: () => {
        this.buttonClickCalls = [];
    },

    handleButtonClick: () => {
        this.buttonClickCalls.push(arguments);
    }
};
