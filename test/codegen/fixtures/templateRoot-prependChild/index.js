"use strict";

module.exports = builder => {
    var templateRoot = builder.templateRoot([builder.htmlElement("div", [])]);

    templateRoot.prependChild(
        builder.vars([
            {
                id: "foo",
                init: builder.literal("bar")
            }
        ])
    );

    return templateRoot;
};
