var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it.skip("should initialize widgets before ready", () => {
        expect(window.afterInitWidgetsFooWidget != null).to.equal(true);
        expect(window.afterInitWidgetsBarWidget != null).to.equal(true);
    });

    it("should initialize properly", () => {
        expect(window.fooWidget != null).to.equal(true);
        expect(window.barWidget != null).to.equal(true);

        expect(window.fooWidget.id).to.be.a("string");
        expect(window.barWidget.id).to.be.a("string");
        expect(window.fooWidget.id).to.not.equal(window.barWidget.id);
    });

    it("should assign unique IDs to each widget", () => {
        expect(window.fooWidget.id).to.be.a("string");
        expect(window.barWidget.id).to.be.a("string");
        expect(window.bazWidget.id).to.be.a("string");
        expect(window.fooWidget.id).to.not.equal(window.barWidget.id);
        expect(window.fooWidget.id).to.not.equal(window.bazWidget.id);
        expect(window.bazWidget.id).to.contain(window.fooWidget.id);
    });

    it("should assign a unique ID to a nested widget based on the parent ID", () => {
        expect(window.bazWidget.id).to.contain(window.fooWidget.id + "-");
    });

    it("should serialize state correctly", () => {
        expect(window.fooWidget.state.type).to.equal("state");
        expect(window.fooWidget.state.name).to.equal("foo");
    });

    it("should serialize widget config correctly", () => {
        expect(window.fooWidget.widgetConfig.type).to.equal("config");
        expect(window.fooWidget.widgetConfig.name).to.equal("foo");
    });
});
