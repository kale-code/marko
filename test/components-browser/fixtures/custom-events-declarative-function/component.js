module.exports = {
    onMount: () => {
        this.name = "app-foo";
        this.getComponent("bar").appendHtml("FOO");
    }
};
