var expect = require("chai").expect;

module.exports = helpers => {
    var widget = helpers.mount(require.resolve("./index"), {});

    expect(widget.getWidget("bar") == null).to.equal(false);

    widget.getWidget("bar").destroy();

    expect(widget.getWidget("bar") == null).to.equal(true);
};
