var expect = require("chai").expect;

exports.checkError = e => {
    expect(e.toString()).to.contain("Tag not nested within a");
    expect(e.toString()).to.contain("<test-nested-tags-overlay>");
    expect(e.toString()).to.contain("<test-nested-tags-overlay:header>");
    expect(e.toString()).to.contain("<test-nested-tags-overlay:footer>");
};
