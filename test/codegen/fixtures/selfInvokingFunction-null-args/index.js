"use strict";

module.exports = builder => {
    return builder.selfInvokingFunction(null, null, [
        builder.vars(["foo"]),
        builder.assignment("foo", builder.literal("bar"))
    ]);
};
