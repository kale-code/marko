module.exports = (helpers, done) => {
    require("marko/ready").patchComponent();

    try {
        var component = helpers.mount(require.resolve("./index"), {});

        component.ready(() => {
            done();
        });
    } finally {
        delete require("marko/components/Component").prototype.ready;
    }
};
