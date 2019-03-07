module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: (state, input) => {
        return {
            name: input.name,
            messageCount: input.messageCount
        };
    },

    init: () => {
        this.lifecycleEvents = [];

        this.recordWidgetLifecycleEvent("init");
    },

    onRender: eventArg => {
        this.recordWidgetLifecycleEvent(
            eventArg.firstRender ? "onRender:firstRender" : "onRender"
        );
    },

    onBeforeDestroy: () => {
        this.recordWidgetLifecycleEvent("onBeforeDestroy");
    },

    onDestroy: () => {
        this.recordWidgetLifecycleEvent("onDestroy");
    },

    onBeforeUpdate: () => {
        this.recordWidgetLifecycleEvent("onBeforeUpdate");
    },

    onUpdate: () => {
        this.recordWidgetLifecycleEvent("onUpdate");
    },

    recordWidgetLifecycleEvent: name => {
        this.lifecycleEvents.push(name);
    }
});
