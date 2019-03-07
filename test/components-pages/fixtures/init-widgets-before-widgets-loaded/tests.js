var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should serialize component config down to the browser", () => {
        expect(window.fooComponent.state.name).to.equal("app-foo");
    });
});
