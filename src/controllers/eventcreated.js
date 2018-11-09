/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function newevent(ctx) {
    const template = 'eventcreated.njk';

    const body = ctx.request.body;

    const date = new Date(2018, body.month, body.day, body.hour, body.minute, 0);

    events.insert(ctx.db, body.title, date, body.image, body.location);

    return ctx.render(template, {});
}

module.exports = {
    newevent,
};
