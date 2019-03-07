exports.templateData = {
    userInfo: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ name: "John" });
            }, 100);
        });
    }
};
