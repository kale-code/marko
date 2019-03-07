module.exports = {
    onInput: input => {
        var alertType = input.alertType || "success";
        var alertMessage = input.alertMessage || "Hello World!";

        this.state = {
            alertType: alertType,
            alertMessage: alertMessage
        };
    },

    setAlertType: newAlertType => {
        this.setState("alertType", newAlertType);
    },

    setAlertMessage: newAlertMessage => {
        this.setState("alertMessage", newAlertMessage);
    }
};
