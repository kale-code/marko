var expect = require("chai").expect;

module.exports = (helpers, done) => {
    var component = helpers.mount(require.resolve("./index"), {
        name: "Frank"
    });

    expect(component.el.innerHTML).to.contain("Hello Frank!");

    component.setName("Jane");

    expect(component.el.innerHTML).to.contain("Hello Frank!");

    component.onUpdate = () => {
        expect(component.el.innerHTML).to.contain("Hello Jane!");
        done();
    };
};
