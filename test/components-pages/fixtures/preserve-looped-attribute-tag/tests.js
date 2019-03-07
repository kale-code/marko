var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should update correctly", () => {
        var $el = document.getElementById("root");
        expect($el.innerHTML).to.eql("<ul><li>A</li><li>B</li><li>C</li></ul>");
    });
});
