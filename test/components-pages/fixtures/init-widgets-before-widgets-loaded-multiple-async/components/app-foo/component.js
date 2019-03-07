module.exports = {
    onInput: () => {
        var parent = {
            child: {}
        };

        parent.child.parent = parent;

        this.state = {
            name: "app-foo",
            parent: parent
        };
    },

    onMount: () => {
        if (!window.fooComponents) {
            window.fooComponents = [];
        }
        window.fooComponents.push(this);
    }
};
