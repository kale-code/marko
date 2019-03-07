module.exports = {
    onMount: () => {
        window.splitComponent = this;
        this.clicked = false;
    },
    handleClick: value => {
        this.clicked = value;
    }
};
