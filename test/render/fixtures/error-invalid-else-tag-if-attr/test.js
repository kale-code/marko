var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = err => {
    expect(err.toString()).to.contain(
        'Invalid <else if> tag. Invalid "if" attribute.'
    );
};
