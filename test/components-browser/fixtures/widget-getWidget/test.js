var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});
    expect(component.getComponent("bar").name).to.equal("app-foo");
};
