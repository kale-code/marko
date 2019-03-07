var code;
var fs = require("fs");

exports.isSupported = true;

exports.getCode = () => {
    if (!code) {
        code = fs.readFileSync(
            require.resolve("./client-reorder-runtime.min.js"),
            "utf8"
        );
        code = '<script type="text/javascript">' + code + "</script>";
    }
    return code;
};
