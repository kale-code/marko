module.exports = {
    onInput: input => {
        this.state = {
            checked: input.checked === true,
            className: input["class"],
            data: input.data,
            body: input.label || input.renderBody
        };
    },

    isChecked: () => {
        return this.state.checked === true;
    },

    setChecked: newChecked => {
        if (newChecked !== this.state.checked) {
            this.setState("checked", !this.state.checked);
        }
    },

    toggle: () => {
        this.setChecked(!this.state.checked);
    },

    getData: () => {
        return this.state.data;
    },

    handleClick: () => {
        var newChecked = !this.state.checked;

        var defaultPrevented = false;

        this.emit("toggle", {
            checked: newChecked,
            data: this.state.data,
            preventDefault: () => {
                defaultPrevented = true;
            }
        });

        if (!defaultPrevented) {
            this.setState("checked", newChecked);
        }
    }
};
