const Router = require('koa-router');
const indexControllers = require('../controllers/index.js');
const newEventControllers = require('../controllers/newEvent.js');
const eventCreatedControllers = require('../controllers/eventCreated.js');
const eventDetailsControllers = require('../controllers/eventDetails.js');
const rsvpControllers = require('../controllers/rsvp.js');


const router = new Router();
router.get('/', indexControllers.index);
router.get('/events/new', newEventControllers.newEvent);
router.post('/events/new', eventCreatedControllers.newEvent);
router.get('/events/:id', eventDetailsControllers.eventDetails);
router.get('/about', indexControllers.about);
router.post('/rsvp/:id', rsvpControllers.attendeeRegistrationPost);

module.exports = router;

// How to allow people to sign up for an event
// 0. Do I need a seperate controller for the signups?
// 1. [In the routes.js] const eventSignUpControllers = require('../controllers/signUp.js');
// 2. How
