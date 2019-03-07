var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should allow widget to be split from renderer", () => {
        var widget = window.appButtonSplit;
        expect(widget.el.innerHTML).to.equal("Test Button");
        widget.setLabel("New Label");
        expect(widget.el.innerHTML).to.equal("New Label");
    });
});
