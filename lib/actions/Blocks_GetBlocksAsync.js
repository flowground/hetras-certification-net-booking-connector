/**
 * Auto-generated action file for "hetras Booking API Version 0" API.
 *
 * Generated at: 2019-05-07T14:42:18.015Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / hetras-certification-net-booking-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Blocks_GetBlocksAsync'
 * Endpoint Path: '/api/booking/v0/blocks'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "App-Id",
    "App-Key",
    "hotelId",
    "groupCode",
    "from",
    "to",
    "status",
    "ratePlanCodes",
    "countDetails",
    "skip",
    "top",
    "inlinecount"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "App_Id": "App-Id",
    "App_Key": "App-Key",
    "hotelId": "hotelId",
    "groupCode": "groupCode",
    "from": "from",
    "to": "to",
    "status": "status",
    "ratePlanCodes": "ratePlanCodes",
    "countDetails": "countDetails",
    "skip": "skip",
    "top": "top",
    "inlinecount": "inlinecount",
    "CanBeCanceled": "CanBeCanceled",
    "IsCancellationRequested": "IsCancellationRequested",
    "Handle": "Handle",
    "IsClosed": "IsClosed",
    "IsInvalid": "IsInvalid",
    "SafeWaitHandle": "SafeWaitHandle",
    "WaitHandle": "WaitHandle",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'Blocks_GetBlocksAsync',
        pathName: '/api/booking/v0/blocks',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}