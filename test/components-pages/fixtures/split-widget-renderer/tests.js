var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should allow component to be split from renderer", () => {
        var component = window.appButtonSplit;
        expect(component.el.innerHTML).to.equal("Test Button");
        component.setLabel("New Label");
        expect(component.el.innerHTML).to.equal("New Label");
    });

    it("should allow component to be split from renderer and for browser file to export class", () => {
        var component = window.appButtonSplitExportClass;
        expect(component.el.innerHTML).to.equal("Test Button");
        component.setLabel("New Label");
        expect(component.el.innerHTML).to.equal("New Label");
    });

    it("should allow UI component to only have a component and an index.marko", () => {
        expect(window.componentOnly).to.be.an("object");
    });
});
