exports.render = (input, out) => {
    out.write("test: " + input.test + "|");

    var keys = Object.keys(input).sort();
    var entries = keys.map(key => {
        return key + "=" + input[key];
    });
    out.write("all attributes: [" + entries.join(", ") + "]");
};
