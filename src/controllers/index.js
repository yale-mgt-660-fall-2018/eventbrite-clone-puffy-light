/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function index(ctx) {
    const template = 'index.njk';
    //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];

    const eventList = events.getAllEvents(ctx.db);

    return ctx.render(template, { eventList });
}

module.exports = {
    index,
};
