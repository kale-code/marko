module.exports = require("marko-widgets").defineWidget({
    init: () => {
        window.appButtonSplit = this;
    },
    setColor: function(color) {
        this.el.style.backgroundColor = color;
    },
    setLabel: function(label) {
        this.el.innerHTML = label;
    }
});
