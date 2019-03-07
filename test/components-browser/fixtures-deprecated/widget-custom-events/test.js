var expect = require("chai").expect;

module.exports = helpers => {
    var widget = helpers.mount(require.resolve("./index"), {});

    var testEventFired = false;

    widget.getWidget("bar").on("testEvent", (a, b) => {
        expect(a).to.equal("a");
        expect(b).to.equal("b");
        testEventFired = true;
    });

    widget.getWidget("bar").emitTestEvent();

    expect(testEventFired).to.equal(true);
};
