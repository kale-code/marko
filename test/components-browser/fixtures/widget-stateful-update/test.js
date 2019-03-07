var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {
        size: "large",
        label: "Initial Label"
    });

    expect(component.el.className).to.contain("large");

    component.setSize("small");
    component.update();

    expect(component.el.className).to.contain("small");
};
