var expect = require("chai").expect;

exports.compilerOptions = {
    meta: true
};

exports.checkError = err => {
    expect(err.toString()).to.contain(
        "index.marko:1:0] Unsupported attribute on the component style tag: foo"
    );
};
