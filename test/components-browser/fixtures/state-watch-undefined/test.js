var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.el.innerHTML).to.contain("Hello !");
    component.state.name = "Frank";
    component.update();
    expect(component.el.innerHTML).to.contain("Hello Frank!");
};
