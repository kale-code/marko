module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: input => ({
        size: input.size || "normal",
        variant: input.variant || "primary",
        className: input["class"],
        attrs: input["*"]
    }),

    getInitialBody: input => input.label || input.renderBody,
    getTemplateData: state => {
        var rootAttrs = {};

        var classParts = ["app-button"];

        var type = "button";

        var variant = state.variant;
        if (variant !== "primary") {
            classParts.push("app-button-" + variant);
        }

        var size = state.size;
        if (size !== "normal") {
            classParts.push("app-button-" + size);
        }

        var className = state.className;
        if (className) {
            classParts.push(className);
        }

        var splatAttrs = state.attrs;
        if (splatAttrs) {
            for (var splatAttr in splatAttrs) {
                if (splatAttrs.hasOwnProperty(splatAttr)) {
                    rootAttrs[splatAttr] = splatAttrs[splatAttr];
                }
            }
        }

        rootAttrs["class"] = classParts.join(" ");

        return {
            type: type,
            rootAttrs: rootAttrs
        };
    },

    handleClick: event => {
        // Every Widget instance is also an EventEmitter instance.
        // We will emit a custom "click" event when a DOM click event
        // is triggered
        this.emit("click", {
            event: event // Pass along the DOM event in case it is helpful to others
        });
    },

    // Add any other methods here
    setVariant: variant => {
        this.setState("variant", variant);
    },

    setSize: size => {
        this.setState("size", size);
    },

    setLabel: label => {
        this.setState("label", label);
    },

    getSize: () => {
        return this.state.size;
    }
});
