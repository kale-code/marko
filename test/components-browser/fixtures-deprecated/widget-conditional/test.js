var expect = require("chai").expect;

module.exports = helpers => {
    var widget = helpers.mount(require.resolve("./index"), {
        includeWidget: false
    });

    expect(widget == null).to.equal(true);

    expect(helpers.targetEl.innerHTML).contain("[app-conditional-widget]");

    widget = helpers.mount(require.resolve("./index"), {
        includeWidget: true
    });

    expect(widget != null).to.equal(true);
};

module.exports.fails_hydrate = true;
