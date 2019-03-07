"use strict";

module.exports = builder => {
    return builder.selfInvokingFunction(
        ["win"],
        ["window"],
        [builder.assignment("win.foo", builder.literal("bar"))]
    );
};
