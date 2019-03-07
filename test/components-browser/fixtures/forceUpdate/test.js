module.exports = (helpers, done) => {
    var component = helpers.mount(require.resolve("./index.marko"), {});
    component.test(done);
};
