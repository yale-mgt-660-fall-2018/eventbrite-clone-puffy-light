/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function newevent(ctx) {
    const template = 'eventcreated.njk';

    console.log(ctx.request.body);

    return ctx.render(template, {});
}

module.exports = {
    newevent,
};
