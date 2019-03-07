module.exports = {
    onMount: () => {
        window.splitComponent = this;
        this.clicked = false;
    },
    handleClick: function(value) {
        this.clicked = value;
    }
};
