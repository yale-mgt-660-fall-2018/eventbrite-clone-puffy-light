/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function showEvent(ctx) {
    const template = 'eventpage.njk';
    //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];

    let event;

        try {
          event = await events.getEvent(ctx.db, request.params.id);
        } catch(e) {
          eventList = []
          console.log(e);
        }


    return ctx.render(template, {event });
}

module.exports = {
    showEvent,
};
