const expect = require("chai").expect;

exports.checkError = err => {
    expect(err.toString()).to.contain(
        'The "for:scoped" attribute cannot be used in conjunction with the "for" attribute'
    );
};
