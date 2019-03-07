var expect = require("chai").expect;

module.exports = (helpers, done) => {
    var component = helpers.mount(require.resolve("./index"));
    setTimeout(() => {
        expect(component.getEl("root").innerHTML).to.contain("Mounted: true");
        done();
    });
};
