var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});
    expect(component.data).to.deep.equal({ a: 1 });
};
