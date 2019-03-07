var expect = require("chai").expect;

module.exports = (helpers, done) => {
    var component = helpers.mount(require.resolve("./index"), {
        name: "john"
    });

    component.on("html", renderedHtml => {
        expect(renderedHtml).to.equal("<div>[async] john</div>");
        done();
    });

    component.on("error", error => {
        done(error);
    });
};
