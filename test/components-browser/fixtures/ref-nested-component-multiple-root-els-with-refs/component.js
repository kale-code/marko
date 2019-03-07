module.exports = {
    onInput: input => {
        this.state = {
            name: input.name,
            age: input.age
        };
    },
    setName: newName => {
        this.setState("name", newName);
    },
    setAge: newAge => {
        this.setState("age", newAge);
    }
};
