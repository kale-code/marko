function Component() {}

Component.prototype = {
    onMount: () => {
        window.appButtonSplitExportClass = this;
    },
    setColor: color => {
        this.el.style.backgroundColor = color;
    },
    setLabel: label => {
        this.el.innerHTML = label;
    }
};

module.exports = Component;
