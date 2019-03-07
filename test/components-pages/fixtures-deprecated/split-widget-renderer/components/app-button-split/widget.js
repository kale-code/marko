module.exports = require("marko-widgets").defineWidget({
    init: () => {
        window.appButtonSplit = this;
    },
    setColor: color => {
        this.el.style.backgroundColor = color;
    },
    setLabel: label => {
        this.el.innerHTML = label;
    }
});
