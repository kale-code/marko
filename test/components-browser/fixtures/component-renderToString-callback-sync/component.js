var helloComponent = require("./components/hello");

module.exports = {
    onMount: () => {
        var self = this;
        helloComponent.renderToString(
            {
                name: this.input.name
            },
            (error, html) => {
                if (error) {
                    self.emit("renderError", error);
                } else {
                    self.emit("html", html);
                }
            }
        );
    }
};
