module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getInitialState: input => {
        var alertType = input.alertType || "success";
        var alertMessage = input.alertMessage || "Hello World!";

        return {
            alertType: alertType,
            alertMessage: alertMessage
        };
    },

    getTemplateData: state => {
        var alertType = state.alertType;
        var alertMessage = state.alertMessage;

        return {
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
});
