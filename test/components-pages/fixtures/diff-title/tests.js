var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should allow diffing title inside head", () => {
        var app = window.app;
        expect(document.title).to.equal("Count: 0");

        app.increment();
        app.update();

        expect(app.state.count).to.equal(1);
        expect(document.title).to.equal("Count: 1");
    });
});
