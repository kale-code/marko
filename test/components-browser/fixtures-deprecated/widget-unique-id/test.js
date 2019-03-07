var expect = require("chai").expect;

module.exports = helpers => {
    var widgets = [];

    function renderWidget() {
        var widget = helpers.mount(require.resolve("./index"), {});
        widgets.push(widget);
    }

    renderWidget();
    renderWidget();
    renderWidget();

    var ids = {};
    widgets.forEach(widget => {
        ids[widget.id] = true;
    });

    expect(widgets.length).to.equal(3);
    expect(Object.keys(ids).length).to.equal(widgets.length);
};
