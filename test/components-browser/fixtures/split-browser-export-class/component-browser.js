function Component() {}

Component.prototype = {
    handleClick: () => {
        this.state.clicked = true;
    }
};

module.exports = Component;
