"use strict";

module.exports = builder => {
    var containerNode = builder.containerNode("Test", () => {
        return builder.htmlElement(
            "div",
            [
                {
                    name: "class",
                    value: builder.literal("greeting")
                }
            ],
            [builder.text(builder.literal("Hello World"))]
        );
    });

    return containerNode;
};
