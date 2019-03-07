module.exports = {
    onMount: () => {
        this.counter = 0;
    },

    handleMouseMove: (event, el) => {
        el.innerHTML = "" + this.counter++;
    }
};
