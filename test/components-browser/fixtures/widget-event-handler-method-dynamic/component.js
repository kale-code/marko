module.exports = {
    onMount: () => {
        this.fooClicked = false;
        this.barClicked = false;
    },

    handleFooClick: () => {
        this.fooClicked = true;
    },

    handleBarClick: () => {
        this.barClicked = true;
    }
};
