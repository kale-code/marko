var expect = require("chai").expect;

module.exports = helpers => {
    var widget = helpers.mount(require.resolve("./index"), {
        size: "large",
        label: "Initial Label"
    });

    var oldState = widget.state;
    widget.setState("size", "large");
    expect(widget.state).to.equal(oldState);
    widget.update();
};
