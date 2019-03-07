module.exports = {
    renderer: (input, out) => {
        out.beginElement("div");
        out.text(input.name.toUpperCase());
        out.endElement();
    }
};
