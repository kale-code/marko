var extend = require("raptor-util/extend");
var expect = require("chai").expect;

exports.templateData = {
    userInfoShort: done => {
        setTimeout(() => {
            done(null, {});
        }, 50);
    },
    userInfoLong: done => {
        setTimeout(() => {
            done(null, {});
        }, 200);
    }
};

exports.checkEvents = (events, snapshot) => {
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

    snapshot(events, "-events.json");
};
