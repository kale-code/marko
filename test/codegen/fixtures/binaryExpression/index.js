"use strict";

module.exports = builder => {
    return builder.binaryExpression(
        builder.identifier("foo"),
        "/",
        builder.literal(2)
    );
};
