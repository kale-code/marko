module.exports = {
    onMount: () => {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder = window.rerenderInitOrder || [];
        window.rerenderInitOrder.push(this.input.id);
    },
    onUpdate: () => {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder.push(this.input.id);
    }
};
