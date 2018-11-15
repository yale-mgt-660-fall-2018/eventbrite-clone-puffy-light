/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function newevent(ctx) {
    var template_ec;
    var err = false;

    const body = ctx.request.body;

    const date = new Date(body.month + " " + body.day + ", " + body.year + " " + body.hour + ":" + body.minute + ":00");

    try {
      await events.insert(ctx.db, body.title, date, body.image, body.location);
      template = 'eventcreated.njk';
    } catch (e) {
      template = 'newevent.njk';
      err = true;
    }

    return ctx.render(template, {err});
}

module.exports = {
    newevent,
};
