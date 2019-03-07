module.exports = {
    onMount: () => {
        this.numOfInvocations = 0;
    },

    onceClick: () => {
        this.numOfInvocations++;
    }
};
