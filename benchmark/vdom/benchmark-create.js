module.exports = app => {
    var Suite = window.Benchmark.Suite;

    var names = ["dom", "dom-innerHTML", "marko-vdom", "react"];

    var htmlFiles = ["todomvc", "marko-docs", "tabs"];

    function loadScripts() {
        window.createBenchmarks = {};

        var scripts = [];

        names.forEach(name => {
            htmlFiles.forEach(htmlFile => {
                scripts.push(
                    "./codegen-create/benchmark-" +
                        htmlFile +
                        "-" +
                        name +
                        ".js"
                );
            });
        });

        return app.loadScripts(scripts);
    }

    function runForHtmlFile(htmlFile) {
        return loadScripts(htmlFile).then(() => {
            var suite = new Suite("create-" + htmlFile);

            names.forEach(name => {
                suite.add(name, () => {
                    return window.createBenchmarks[htmlFile + "-" + name]();
                });
            });

            return app.runSuite(suite);
        });
    }

    var loadScriptsPromise = loadScripts();

    return () => {
        var promiseChain = loadScriptsPromise;

        htmlFiles.forEach(htmlFile => {
            promiseChain = promiseChain.then(() => {
                return runForHtmlFile(htmlFile);
            });
        });

        return promiseChain;
    };
};
