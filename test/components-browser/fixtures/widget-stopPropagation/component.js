module.exports = {
    onMount: () => {
        this.divClicked = false;
        this.buttonClicked = false;
    },

    handleDivClick: () => {
        this.divClicked = true;
    },

    handleButtonClick: function(event) {
        this.buttonClicked = true;
        event.stopPropagation();
    }
};
