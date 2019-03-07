module.exports = {
    onMount: () => {
        this.divClicked = false;
        this.buttonClicked = false;
    },

    handleDivClick: () => {
        this.divClicked = true;
    },

    handleButtonClick: event => {
        this.buttonClicked = true;
        event.stopPropagation();
    }
};
