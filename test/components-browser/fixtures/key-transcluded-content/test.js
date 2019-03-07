var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    var passwordInput = component.getEl("passwordInput");
    expect(passwordInput.type).to.equal("password");
};
