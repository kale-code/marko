module.exports = {
    onInput: function(input) {
        this.state = {
            name: input.name,
            age: input.age
        };
    },
    getName: () => {
        return this.getEl("name").innerHTML;
    },
    getAge: () => {
        return this.getEl("age").innerHTML;
    }
};
