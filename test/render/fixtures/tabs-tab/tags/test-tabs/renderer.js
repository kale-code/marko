var template = require("./template.marko");

exports.render = (input, out) => {
    var tabs = [],
        activeFound = false;

    input.renderBody(out, {
        addTab: tab => {
            if (tab.active) {
                tab.activeFound = true;
            }

            tab.id = "tab" + tabs.length;
            tabs.push(tab);
        }
    });

    if (!activeFound && tabs.length) {
        tabs[0].active = true;
    }

    tabs.forEach(tab => {
        tab.liClass = tab.active ? "active" : "";
        tab.divClass = tab.active ? "tab-pane active" : "tab-pane";
    });

    template.render(
        {
            tabs: tabs
        },
        out
    );
};
