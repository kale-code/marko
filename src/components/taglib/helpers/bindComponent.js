var createRendererFunc = require("../../renderer");

module.exports = componentProps => {
    var renderer = createRendererFunc(
        (data, out, component, state) => {
            data.$renderBody(out, component, state);
        },
        componentProps,
        null
    );

    return function bindComponent(renderBody, out) {
        renderer(
            {
                $renderBody: renderBody
            },
            out
        );
    };
};
