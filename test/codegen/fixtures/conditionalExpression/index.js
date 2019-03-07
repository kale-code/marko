"use strict";

module.exports = builder =>
    builder.conditionalExpression(
        builder.identifier("isHidden"),
        builder.literal("hidden"),
        builder.literal("visible")
    );
