"use strict";

module.exports = builder => {
    return builder.binaryExpression(
        builder.literal(5),
        "-",
        builder.literal(1)
    );
};
