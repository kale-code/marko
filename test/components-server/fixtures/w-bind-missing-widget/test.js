var expect = require("chai").expect;

module.exports = () => {
    expect(() => {
        require("./template.marko");
    }).to.throw(
        /No corresponding JavaScript module found in the same directory/
    );
};
