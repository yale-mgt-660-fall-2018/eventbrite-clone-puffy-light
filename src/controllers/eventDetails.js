/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
 const events = require('../models/events.js');
const crypto = require('crypto');


 async function eventDetails(ctx) {
   let err = false;
   let cc = "";
   const id = Number(ctx.req.url.match(/[0-9]+/)[0]);
   if (undefined != ctx.attendeeInfo) {
      err = ctx.attendeeInfo.err;
      if (!err) {cc = ctx.attendeeInfo.cc;}
   }
    //const waysOfBeingAwesome = ['awesome1', 'awesome2', 'awesome3'];
    //console.log(events.getEvent);
     let event, attendees;
     try {
          event = await events.getEvent(ctx.db, id);
        } catch(e) {
          event = [];
          console.log(e);
        }
        try {
         attendees = await events.getAttendeeByEventId(ctx.db, id);
       } catch(e) {
         attendees = [];
         console.log(e);
       }
     return ctx.render('eventDetails.njk', {event, attendees, err, cc });
}

async function attendeeRegistrationPost(ctx) {

    const email=ctx.request.body.email.toLowerCase();
    const getRequestId=ctx.params.id;
    ctx.attendeeInfo = {};
    ctx.attendeeInfo.err = false;

    try {
      queryResult=await events.insertAttendee(ctx.db,email, getRequestId);
      const teamNickname = 'puffy-light';
      const cc = crypto.createHash('sha256')
        .update(`${email}-${teamNickname}`)
        .digest('hex')
        .substring(0, 7);
      ctx.attendeeInfo.cc = cc;
    } catch (e) {
      ctx.attendeeInfo.err = true;
    }



    return eventDetails(ctx);

}



 module.exports = {
    attendeeRegistrationPost, eventDetails
};
