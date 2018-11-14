/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');

async function index(ctx) {
    const template = 'index.njk';
    //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];

    let eventList;

        try {
          eventList = await events.getAllEvents(ctx.db);
        } catch(e) {
          eventList = []
          console.log(e);
        }


    return ctx.render(template, {eventList });
}

async function about(ctx) {
    //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];


    return ctx.render("about.njk");
}

module.exports = {
    index, about
};
