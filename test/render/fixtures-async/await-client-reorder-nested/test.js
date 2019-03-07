var extend = require("raptor-util/extend");
var expect = require("chai").expect;

exports.templateData = {
    outer: callback => {
        setTimeout(() => {
            callback(null, {});
        }, 100);
    },
    inner1: callback => {
        setTimeout(() => {
            callback(null, {});
        }, 200);
    },
    inner2: callback => {
        setTimeout(() => {
            callback(null, {});
        }, 300);
    }
};

exports.checkHtml = () => {};
exports.checkEvents = (events, snapshot, out) => {
    events = events.map(eventInfo => {
        var arg = extend({}, eventInfo.arg);
        expect(arg.out != null).to.equal(true);

        delete arg.out; // Not serializable
        delete arg.asyncValue; // Not serializable

        return {
            event: eventInfo.event,
            arg: arg
        };
    });

    snapshot(events, out.isVDOM ? "-events-vdom.json" : "-events.json");
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
