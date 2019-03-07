var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it.skip("should initialize widgets before ready", () => {
        expect(window.afterInitWidgets_foo != null).to.equal(true);
        expect(window.afterInitWidgets_bar == null).to.equal(true);

        expect(window.afterReorderer_foo != null).to.equal(true);
        expect(window.afterReorderer_bar != null).to.equal(true);
    });
    it("should initialize properly", () => {
        expect(window.fooWidget != null).to.equal(true);
        expect(window.barWidget != null).to.equal(true);

        expect(window.fooWidget.id).to.be.a("string");
        expect(window.barWidget.id).to.be.a("string");
    });
});
