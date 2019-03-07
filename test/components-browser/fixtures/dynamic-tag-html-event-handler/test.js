var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.helloReceived).to.equal(false);

    component.el.querySelector("button").click();

    expect(component.helloReceived).to.equal(true);
};
