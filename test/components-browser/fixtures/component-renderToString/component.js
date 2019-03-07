var helloComponent = require("./components/hello");

module.exports = {
    onMount: () => {
        this.renderedHtml = helloComponent.renderToString({
            name: this.input.name
        });
    }
};
