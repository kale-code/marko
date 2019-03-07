var expect = require("chai").expect;

module.exports = helpers => {
    var virtualEl = helpers.vdom.createElement("option", { selected: null });

    expect(virtualEl.___hasAttribute("selected")).to.equal(false);

    return virtualEl;
};
