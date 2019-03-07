"use strict";

module.exports = builder => {
    return builder.binaryExpression(
        builder.literal(10),
        "/",
        builder.literal(2)
    );
};
