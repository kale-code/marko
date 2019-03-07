var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should mount explicit components", () => {
        expect(window.helloExplicitComponent != null).to.equal(true);
    });

    it("should mount implicit components nested in an explicit component", () => {
        expect(
            window.helloExplicitComponent.getComponent("nested") != null
        ).to.equal(true);
    });
});
