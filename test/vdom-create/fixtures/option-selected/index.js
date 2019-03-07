var expect = require("chai").expect;

module.exports = helpers => {
    var el = helpers.vdom.createElement(
        "option",
        { selected: "" },
        0 /* childCount */
    );
    expect(el.selected).to.equal(true);
    return el;
};
