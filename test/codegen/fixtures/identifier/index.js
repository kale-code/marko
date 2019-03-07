"use strict";

module.exports = builder => {
    return builder.assignment(
        builder.identifier("foo"),
        builder.literal("abc")
    );
};
