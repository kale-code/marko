module.exports = {
    onInput: () => {
        this.state = {
            name: "app-foo"
        };
    },

    onMount: () => {
        window.fooComponent = this;
        this.mouseMoveEvent = null;
        this.clickEvent = null;
    },

    handleButtonMouseMove: () => {
        this.mouseMoveEvent = arguments;
    },

    handleButtonClick: () => {
        this.clickEvent = arguments;
    }
};
