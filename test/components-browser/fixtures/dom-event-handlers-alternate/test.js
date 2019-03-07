var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    // We are initially on the "sign-in" page
    expect(component.el.querySelector("a").innerHTML).to.equal("Sign up");

    helpers.triggerMouseEvent(component.el.querySelector("a"), "click");

    component.update();

    expect(component.el.querySelector("a").innerHTML).to.equal("Sign in");

    helpers.triggerMouseEvent(component.el.querySelector("a"), "click");

    component.update();

    expect(component.el.querySelector("a").innerHTML).to.equal("Sign up");

    helpers.triggerMouseEvent(component.el.querySelector("a"), "click");

    component.update();

    expect(component.el.querySelector("a").innerHTML).to.equal("Sign in");
};
