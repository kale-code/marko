module.exports = {
    onInput: input => {
        this.state = {
            name: input.name,
            count: input.count,
            className: input["class"],
            foo: "bar",
            hello: "world"
        };
    }
};
