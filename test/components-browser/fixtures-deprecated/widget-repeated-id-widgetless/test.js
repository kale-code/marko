var expect = require("chai").expect;

module.exports = helpers => {
    var widget = helpers.mount(require.resolve("./index"), {});
    var childWidgets = widget.getWidgets("childWidget");
    expect(childWidgets.length).to.equal(3);
};
