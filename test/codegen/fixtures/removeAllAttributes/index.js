"use strict";

module.exports = builder => {
    var div = builder.htmlElement(
        "div",
        {
            class: builder.literal("foo")
        },
        [builder.text(builder.literal("Hello World"))]
    );

    div.removeAllAttributes();

    return builder.program([div]);
};
