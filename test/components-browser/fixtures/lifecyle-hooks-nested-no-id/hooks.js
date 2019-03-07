module.exports = {
    record: function(component, name, args, thisObj) {
        var hooksByComponent =
            this.hooksByComponent || (this.hooksByComponent = {});

        var hooksArray =
            hooksByComponent[component] || (hooksByComponent[component] = []);

        hooksArray.push({
            name: name,
            args: args,
            thisObject: thisObj
        });
    },

    reset: () => {
        this.hooksByComponent = {};
    },

    getHookNames: function(component) {
        var hooksArray = this.hooksByComponent[component];

        return hooksArray.map(hook => hook.name);
    }
};
