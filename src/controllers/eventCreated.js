
const events = require('../models/events.js');

/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
async function newEvent(ctx) {
    var template_ec;
    var err = false;

    const body = ctx.request.body;

    const date = new Date(body.month + " " + body.day + ", " + body.year + " " + body.hour + ":" + body.minute + ":00");

    try {
      await events.insert(ctx.db, body.title, date, body.image, body.location);
      template = 'eventCreated.njk';
    } catch (e) {
      template = 'newEvent.njk';
      err = true;
    }

    return ctx.render(template, {err});
}

module.exports = {
    newEvent,
};
