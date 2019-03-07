var expect = require("chai").expect;

exports.checkTemplate = compiledTemplate => {
    expect(compiledTemplate.dependencies).to.eql([
        {
            type: "require",
            run: true,
            path: __filename
        }
    ]);
};
