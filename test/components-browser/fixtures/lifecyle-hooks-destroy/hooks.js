var hooks = [];

module.exports = {
    record: name => {
        hooks.push(name);
    },

    reset: () => {
        hooks.length = 0;
    },

    getHookNames: () => hooks
};
