module.exports = {
    onCreate: () => {
        this.clicked = false;
    },
    handleButtonClick: () => {
        this.clicked = true;
    }
};
