require("./");

exports.r = require("./renderer-legacy");

exports.c = () => {
    /* no op for defining a component on teh server */
};

// registerComponent is a no-op on the server.
// Fixes https://github.com/marko-js/marko-components/issues/111
exports.rc = typeName => {
    return typeName;
};
