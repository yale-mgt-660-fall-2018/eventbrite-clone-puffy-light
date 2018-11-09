/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function newevent(ctx) {
    const template = 'newevent.njk';

    const eventList = events.getAllEvents(ctx.db);

    return ctx.render(template, { eventList });
}

module.exports = {
    newevent,
};
