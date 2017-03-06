'use strict';
module.exports.handler = function (event, context, callback) {
    return callback({
        statusCode: 200,
        "header": {
            "content-type": "application/json"
        },
        body: "listando stores"
    });
};