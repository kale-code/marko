function Component() {
    throw new Error("THIS SHOULD NOT BE CALLED");
}

Component.prototype = {
    onCreate: () => {
        this.state = {
            name: "Frank"
        };
    }
};

module.exports = Component;
