var expect = require("chai").expect;

module.exports = (helpers, done) => {
    var component = helpers.mount(require.resolve("./index.marko"), {
        size: "large",
        label: "Initial Label"
    });

    component.onUpdate = () => {
        expect(component.el.className).to.contain("small");
        done();
    };

    expect(component.el.className).to.contain("large");
    component.setSize("small");
    expect(component.el.className).to.not.contain("small");
};
