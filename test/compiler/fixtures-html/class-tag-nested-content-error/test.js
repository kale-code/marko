var expect = require("chai").expect;

exports.checkError = e => {
    expect(e.toString()).to.contain(
        'The "class" tag does not allow nested body content'
    );
};
