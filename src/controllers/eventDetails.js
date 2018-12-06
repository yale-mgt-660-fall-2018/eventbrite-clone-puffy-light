/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
 const events = require('../models/events.js');

 async function eventDetails(ctx) {
    const template = 'eventDetails.njk';
    //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];
    //console.log(events.getEvent);
     let event;
         try {
          event = await events.getEvent(ctx.db, Number(ctx.req.url.match(/[0-9]+/)[0]));
          console.log(Number(ctx.req.url.match(/[0-9]+/)[0]));
        } catch(e) {
          event = [];
          console.log(e);
        }
     return ctx.render(template, {event });
}

async function eventAttendees(ctx) {
   const template = 'eventDetails.njk';
   //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];
   //console.log(events.getAttendeeByEventId);
    let attendees;
        try {
         attendees = await events.getAttendeeByEventId(ctx.db, Number(ctx.req.url.match(/[0-9]+/)[0]));
         console.log(attendees);
       } catch(e) {
         event = []
         console.log(e);
       }
    return ctx.render(template, {attendees });
}

 module.exports = {
    eventDetails,
    eventAttendees

};
