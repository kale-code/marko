var expect = require("chai").expect;

module.exports = helpers => {
    var el = helpers.vdom.createElement(
        "input",
        { id: "foo" },
        null /* key */,
        null /* component */,
        0 /* childCount */
    );
    expect(el.___attributes.id).to.equal("foo");
    return el;
};
