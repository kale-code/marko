var myTextNodeComponent = require("./components/my-text-node");

module.exports = {
    onMount: () => {
        this.renderedHtml = myTextNodeComponent.renderToString();
    }
};
