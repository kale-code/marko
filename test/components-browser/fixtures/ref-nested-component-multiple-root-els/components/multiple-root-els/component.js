module.exports = {
    onInput: function(input) {
        this.state = {
            name: input.name,
            age: input.age
        };
    },
    getName: () => {
        return this.els[0].innerHTML;
    },
    getAge: () => {
        return this.els[1].innerHTML;
    }
};
