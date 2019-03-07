exports.templateData = {
    userInfo: () => {
        return new Promise(function(resolve) {
            setTimeout(() => {
                resolve({
                    name: "John"
                });
            }, 100);
        });
    }
};
