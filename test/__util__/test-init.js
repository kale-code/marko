require("./patch-module");
require("complain").log = message => {
    if (process.env.COMPLAIN_THROWS) {
        throw new Error(message);
    }
};
require("../../node-require").install({
    compilerOptions: { writeToDisk: false },
    extensions: [".marko", ".html"]
});
require("it-fails");
