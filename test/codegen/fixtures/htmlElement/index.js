"use strict";

module.exports = builder =>
    builder.htmlElement(
        "div",
        [
            {
                name: "class",
                value: builder.literal("greeting")
            }
        ],
        [builder.text(builder.literal("Hello World"))]
    );
