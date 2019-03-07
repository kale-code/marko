var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should serialize widget config down to the browser", () => {
        expect(window.fooWidget.widgetConfig.name).to.equal("app-foo");
    });
});
