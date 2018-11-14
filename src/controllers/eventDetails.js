/**
* @param  {Context} ctx - A Koa Context
* @returns {Promise} - Returns a promise that resolves to undefined
*/
const events = require('../models/events.js');

async function eventDetails(ctx) {
   const template = 'eventDetails.njk';
   //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];

   let event;

       try {
         event = await events.eventDetails(ctx.db);
       }catch(e) {
         eventList = []
         console.log(e);
       }


   return ctx.render(template, {eventList });
}

module.exports = {
   eventDetails,
};
