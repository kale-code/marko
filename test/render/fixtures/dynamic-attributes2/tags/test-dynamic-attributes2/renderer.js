exports.render = (input, out) => {
    out.write("test: " + input.test + "|");
    var dynamicAttributes = input["*"];

    if (dynamicAttributes) {
        var keys = Object.keys(dynamicAttributes).sort();
        var entries = keys.map(key => key + "=" + dynamicAttributes[key]);
        out.write("dynamic attributes: [" + entries.join(", ") + "]");
    } else {
        out.write("dynamic attributes: []");
    }
};
