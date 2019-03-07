module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});
    component.test(helpers);
};
