var expect = require("chai").expect;

module.exports = helpers => {
    helpers.mount(require.resolve("./index"), {
        name: "Frank"
    });
    var targetEl = helpers.targetEl;
    expect(targetEl.innerHTML).to.equal("Hello Frank!");
};
