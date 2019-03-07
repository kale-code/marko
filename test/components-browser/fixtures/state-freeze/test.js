"use strict";

var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(() => {
        component.state.foo = "bar";
    }).to.throw(TypeError);
};
