var expect = require("chai").expect;

module.exports = (helpers, done) => {
    var component = helpers.mount(require.resolve("./index.marko"));
    var hello = require("./components/hello");

    var targetEl = component.getEl("target");
    hello
        .render({ name: "John" })
        .then(result => {
            result.replace(targetEl);
            expect(component.el.firstElementChild.className).to.equal("hello");
            expect(component.el.firstElementChild.innerHTML).to.equal(
                "Hello John"
            );
            done();
        })
        .catch(err => {
            done(err);
        });
};
