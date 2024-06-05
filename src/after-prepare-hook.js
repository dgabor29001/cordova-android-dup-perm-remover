const createAfterPrepareHook = require("./create-after-prepare-hook");

module.exports = function (context) {
    return createAfterPrepareHook()(context)
};
