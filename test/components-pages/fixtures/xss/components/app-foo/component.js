module.exports = {
    onInput: () => {
        this.state = {
            evil: '</script><script>alert("hello")</script>'
        };

        this.evil = '</script><script>alert("hello")</script>';
    },

    onMount: () => {
        this.componentConfig = {
            evil: this.evil
        };
        window.fooComponent = this;
    }
};
