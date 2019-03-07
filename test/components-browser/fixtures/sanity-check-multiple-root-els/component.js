module.exports = {
    onInput: input => {
        this.state = {
            name: input.name,
            age: input.age,
            url: input.url
        };
    },
    setName: newName => {
        this.setState("name", newName);
    },
    setAge: newAge => {
        this.setState("age", newAge);
    },
    setUrl: newUrl => {
        this.setState("url", newUrl);
    }
};
