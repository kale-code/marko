"use strict";

module.exports = builder => {
    return builder.macro(
        "greeting",
        ["macroInput"],
        [
            builder.text(builder.literal("Hello ")),
            builder.text(
                builder.memberExpression(
                    builder.identifier("macroInput"),
                    builder.identifier("name")
                )
            )
        ]
    );
};
