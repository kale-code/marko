"use strict";

module.exports = builder => {
    return builder.var(
        builder.identifier("foo"),
        builder.literal("bar"),
        "let"
    );
};
