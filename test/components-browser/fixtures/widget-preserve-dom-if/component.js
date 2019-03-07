module.exports = {
    onInput: input => {
        return {
            preserveCondition: input.preserveCondition,
            renderId: input.renderId || 0
        };
    },
    onMount: () => {}
};
