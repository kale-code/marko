module.exports = {
    onMount: () => {
        this.mouseMoveEventCalls = [];
    },

    handleButtonMouseMove: () => {
        this.mouseMoveEventCalls.push(arguments);
    }
};
