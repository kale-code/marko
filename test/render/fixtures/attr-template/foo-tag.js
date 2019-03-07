module.exports = (input, out) => {
    out.write("Rendered template:");
    input.template.render({}, out);
};
