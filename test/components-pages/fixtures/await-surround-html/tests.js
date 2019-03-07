var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should mount components", () => {
        expect(window.helloComponent != null).to.equal(true);
    });
});
