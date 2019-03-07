module.exports = {
    onMount: () => {
        this.numOfInvocations = 0;
    },

    onceMouseMove: () => {
        this.numOfInvocations++;
    }
};
