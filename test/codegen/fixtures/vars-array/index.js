"use strict";

module.exports = builder => {
    return builder.vars([
        {
            id: "foo",
            init: builder.literal("bar")
        },
        {
            id: builder.identifier("hello"),
            init: builder.literal("world")
        }
    ]);
};
