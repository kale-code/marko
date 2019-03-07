"use strict";

module.exports = builder => {
    var htmlElement = builder.htmlElement(
        "div",
        [
            {
                name: "class",
                value: builder.concat(
                    builder.literal("foo"),
                    builder.identifier("className")
                ),
                escape: false
            }
        ],
        [builder.text(builder.literal("Hello World"))]
    );

    return htmlElement;
};
