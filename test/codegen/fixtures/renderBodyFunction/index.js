"use strict";

module.exports = builder => {
    return builder.renderBodyFunction([
        builder.text(builder.literal("Hello World!"))
    ]);
};
