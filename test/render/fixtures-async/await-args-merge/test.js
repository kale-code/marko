var users = {
    "0": {
        name: "John B. Flowers",
        occupation: "Clock repairer",
        gender: "Male"
    },
    "1": {
        name: "Pamela R. Rice",
        occupation: "Cartographer",
        gender: "Female"
    },
    "2": {
        name: "Barbara C. Rigsby",
        occupation: "Enrollment specialist",
        gender: "Female"
    },
    "3": {
        name: "Anthony J. Ward",
        occupation: "Clinical laboratory technologist",
        gender: "Male"
    }
};

exports.templateData = {
    userInfo: (arg, done) => {
        setTimeout(() => {
            done(null, users[arg.userId][arg.property]);
        }, 100);
    }
};
