/**
 * @param  {Context} ctx - A Koa Context
 * @returns {Promise} - Returns a promise that resolves to undefined
 */
const events = require('../models/events.js');
const bluebird = require('bluebird');
const pgp = require('pg-promise')({ promiseLib: bluebird });

async function attendeeRegistrationPost(ctx) {

    const postRequest=ctx.request.body;

    const getRequestId=ctx.params.id;
    console.log('RSVP!');
    console.log(postRequest);
    console.log(getRequestId);

    //Here we check if the post request meet the rules
    const eventsErrors= [];
    insertIntoDatabase=true;
    if (postRequest.email==null || postRequest.email==''){
        insertIntoDatabase=false;
        eventsErrors.push('No Mail!');}


    if (getRequestId==null || getRequestId==''){
        insertIntoDatabase=false;
        eventsErrors.push('No Event ID');}

    if(insertIntoDatabase){
    console.log(ctx.request.body);
    const eventsModel = require('../models/events.js');
    queryResult=await eventsModel.insertAttendee(ctx.db,postRequest.email, getRequestId);
    console.log("After Registration")
    eventId=queryResult.id;

    if (getRequestId==null || getRequestId=='') {
      //If the post request is wrong we send an error message to be listed.
      const template = 'newEvent.njk';
      return ctx.render(template ,{ eventsErrors });
    }

    return ctx.redirect("/events/"+getRequestId);

    }



}

module.exports = {
    attendeeRegistrationPost,

};
