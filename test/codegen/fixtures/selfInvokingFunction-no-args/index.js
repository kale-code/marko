"use strict";

module.exports = builder => {
    return builder.selfInvokingFunction([
        builder.vars(["foo"]),
        builder.assignment("foo", builder.literal("bar"))
    ]);
};
