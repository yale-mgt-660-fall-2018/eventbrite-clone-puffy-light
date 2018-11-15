/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function newEvent(ctx) {
    const template = 'newEvent.njk';

    const eventList = events.getAllEvents(ctx.db);

    return ctx.render(template, { eventList });
}

module.exports = {
    newEvent,
};
