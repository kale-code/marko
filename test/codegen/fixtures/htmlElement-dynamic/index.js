"use strict";

module.exports = builder => {
    return builder.htmlElement(
        builder.memberExpression("data", "tagName"),
        [
            {
                name: "class",
                value: builder.literal("greeting")
            }
        ],
        [builder.text(builder.literal("Hello World"))]
    );
};
