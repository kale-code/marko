var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    var testEventFired = false;

    component.getComponent("bar").on("testEvent", (a, b) => {
        expect(a).to.equal("a");
        expect(b).to.equal("b");
        testEventFired = true;
    });

    component.getComponent("bar").emitTestEvent();

    expect(testEventFired).to.equal(true);
};
