module.exports = {
    onInput: input => {
        this.state = {
            size: input.size || "normal",
            variant: input.variant || "primary",
            className: input["class"],
            body: input.label || input.renderBody
        };
    },

    handleClick: event => {
        // Every Component instance is also an EventEmitter instance.
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
    }
};
