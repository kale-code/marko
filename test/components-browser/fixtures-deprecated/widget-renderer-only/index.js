require("marko/runtime/vdom");

module.exports = require("marko/legacy-components").defineComponent({
    renderer: (input, out) => {
        out.text("Hello " + input.name + "!");
    }
});
