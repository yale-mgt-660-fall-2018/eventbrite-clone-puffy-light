// API Funciton here
// api (req, res) {
// let events=eventControllers.all;
//if (req.query.search) {
//  then only keep matche events
//}
 // query database?
//}

const events = require('../models/events.js');

/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
async function eventApi(ctx) {
    const search = ctx.request.query.search;
    let listOfEvents = [];
    if (search) {
        // Get only those events that match the search in their title
        // Currently returns all, add search request function here
    } else {
        // Get all events
        try {
            listOfEvents = await events.getAllEvents(ctx.db);
        } catch (e) {
            return ctx.throw(500, e);
        }
    }
    ctx.type = 'application/json; charset=utf-8';
    return ctx.body = {"events": listOfEvents};
}

module.exports = {
    eventApi,
};