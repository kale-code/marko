module.exports = {
    onMount: () => {
        this.mouseMoveEvent = undefined;
    },

    handleButtonMouseMove: () => {
        this.mouseMoveEvent = arguments;
    }
};
