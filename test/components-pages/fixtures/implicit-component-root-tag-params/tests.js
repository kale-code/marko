var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should mount implicit components with tag params", () => {
        expect(window.helloImplicitComponentSent).to.equal(true);
    });
});
