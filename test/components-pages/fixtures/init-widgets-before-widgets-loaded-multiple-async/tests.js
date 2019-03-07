var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should initialize all components", () => {
        expect(window.fooComponents.length).to.equal(2);
    });
});
