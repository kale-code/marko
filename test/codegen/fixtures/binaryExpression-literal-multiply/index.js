"use strict";

module.exports = builder => {
    return builder.binaryExpression(
        builder.literal(2),
        "*",
        builder.literal(5)
    );
};
