module.exports = {
    onMount: () => {
        window.rerenderInitOrder.push("parent");
    },
    onUpdate: () => {
        window.rerenderInitOrder.push("parent");
    }
};
