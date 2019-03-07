var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.getComponent("bar") == null).to.equal(false);

    component.getComponent("bar").destroy();

    expect(component.getComponent("bar") == null).to.equal(true);
};
