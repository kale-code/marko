var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should allow diffing body", () => {
        var app = window.app;
        var countEl = app.getEl("count");
        expect(countEl.innerHTML).to.equal("0");

        app.increment();
        app.update();

        expect(countEl.innerHTML).to.equal("1");
    });
});
