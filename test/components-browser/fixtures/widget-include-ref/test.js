var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    var barComponent = component.getComponent("barTest");
    expect(barComponent != null).to.equal(true);
    expect(barComponent.name).to.equal("app-bar");
};
