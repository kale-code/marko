"use strict";

var expect = require("chai").expect;

module.exports = helpers => {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(component.state.nameNull).to.equal(null);
    expect(component.state.nameUndefined).to.equal(undefined);
};
