var expect = require("chai").expect;

module.exports = helpers => {
    var virtualEl = helpers.vdom.createElement("option", { selected: 0 });

    expect(virtualEl.___hasAttribute("selected")).to.equal(true);

    return virtualEl;
};
