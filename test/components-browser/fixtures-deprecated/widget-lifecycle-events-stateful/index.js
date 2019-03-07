var lifecycle = require("./lifecycle-recorder");

module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),

    getInitialState: input => {
        return {
            name: input.name,
            messageCount: input.messageCount
        };
    },

    getTemplateData: state => {
        return {
            name: state.name,
            messageCount: state.messageCount
        };
    },

    init: () => {
        this.lifecycleEvents = [];
        lifecycle.record(this.id, "init");
    },

    onRender: eventArg => {
        lifecycle.record(
            this.id,
            eventArg.firstRender ? "onRender:firstRender" : "onRender"
        );
    },

    update_messageCount: newMessageCount => {
        this.getWidget("nestedStateful").setMessageCount(newMessageCount);
        this.getWidget("nestedStateful").update();
    },

    setName: newName => {
        this.setState("name", newName);
    },

    setMessageCount: newMessageCount => {
        this.setState("messageCount", newMessageCount);
    },

    onBeforeDestroy: () => {
        lifecycle.record(this.id, "onBeforeDestroy");
    },

    onDestroy: () => {
        lifecycle.record(this.id, "onDestroy");
    },

    onBeforeUpdate: () => {
        lifecycle.record(this.id, "onBeforeUpdate");
    },

    onUpdate: () => {
        lifecycle.record(this.id, "onUpdate");
    }
});
