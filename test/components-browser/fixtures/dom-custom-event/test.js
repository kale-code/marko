var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});
    var rootNode = component.getEl("root");

    expect(component.event).to.equal(undefined);
    helpers.triggerCustomEvent(rootNode, "Custom-Event", 123);
    expect(component.event.detail).to.equal(123);
};
