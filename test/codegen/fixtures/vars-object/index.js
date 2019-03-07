"use strict";

module.exports = builder => {
    return builder.vars({
        foo: builder.literal("bar"),
        hello: builder.literal("world")
    });
};
