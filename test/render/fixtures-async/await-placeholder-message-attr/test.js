var expect = require("chai").expect;

exports.templateData = {
    testDataProvider: done => {
        setTimeout(() => {
            done(null, { name: "Frank" });
        }, 200);
    }
};

exports.checkHtml = html => {
    expect(html).to.contain("Loading main...");
    expect(html).to.contain("Hello Frank");
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
