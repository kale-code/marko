var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should allow diffing head", () => {
        var app = window.app;
        expect(document.head.getAttribute("count")).to.equal("0");

        app.increment();
        app.update();

        expect(document.head.getAttribute("count")).to.equal("1");
    });
});
