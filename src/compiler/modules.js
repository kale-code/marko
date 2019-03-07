"use strict";

var nativeRequire = require;
var resolveFrom = require("resolve-from");
var deresolve = require("./util/deresolve");

const deresolveOptions = {
    shouldRemoveExt(ext) {
        return ext === ".js" || ext === ".json" || ext === ".es6";
    }
};

// This allows us to swap out a different implementation in the browser...
// We only need this to make Try Online work :/

var helpers = {
    require: path => {
        return nativeRequire(path);
    },

    resolve: path => {
        return nativeRequire.resolve(path);
    },

    resolveFrom: (from, target) => {
        return resolveFrom(from, target);
    },

    deresolve: (targetFilename, from) => {
        return deresolve(targetFilename, from, deresolveOptions);
    }
};

module.exports = helpers;
