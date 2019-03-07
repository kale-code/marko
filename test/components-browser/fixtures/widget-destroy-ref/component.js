module.exports = {
    destroyButton1: () => {
        this.getComponent("button1").destroy();
    },

    getButton1: () => {
        return this.getComponent("button1");
    }
};
