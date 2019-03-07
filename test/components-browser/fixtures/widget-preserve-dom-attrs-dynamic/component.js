module.exports = {
    onInput: input => {
        this.state = {
            className: input.className
        };
    },

    getTemplateData: state => {
        return state;
    }
};
