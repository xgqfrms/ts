"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019.06.06
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */


// `Response` will be defined here...
class Response {
    // Some HTTP status code, such as 200
    status: number;
    // All declarations of 'status' must have identical modifiers ???
}

let log = console.log;
let error = console.error;
let warn = console.warn;

fetch("https://blogs.xgqfrms.xyz/foo/bar")
.then((res: Response) => {
    let json = {};
    log(res.status)
    if (res.status === 200) {
        json = res.json();
    } else {
        // json = {};
    }
    return json;
})
.then(json => log(`fetch json =`, JSON.stringify(json, null, 4)))
.catch(err => error(`fetch error:`, err));
