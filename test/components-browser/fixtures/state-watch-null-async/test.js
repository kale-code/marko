// see https://github.com/marko-js/marko/issues/556
var expect = require("chai").expect;

module.exports = function(helpers, done) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.el.innerHTML).to.not.contain("FATAL ERROR");

    helpers.triggerEvent(component.getEl(), "submit");

    setTimeout(() => {
        expect(component.el.innerHTML).to.contain("FATAL ERROR");
        done();
    }, 100);
};
