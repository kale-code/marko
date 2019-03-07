var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {
        name: "Frank",
        age: 30
    });
    var fooComponent = component.getComponent("foo");
    expect(fooComponent != null).to.equal(true);
    expect(fooComponent.getName()).to.equal("Frank");
    expect(fooComponent.getAge()).to.equal("30");
};
