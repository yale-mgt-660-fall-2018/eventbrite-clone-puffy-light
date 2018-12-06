const Router = require('koa-router');
const indexControllers = require('../controllers/index.js');
const newEventControllers = require('../controllers/newEvent.js');
const eventCreatedControllers = require('../controllers/eventCreated.js');
const eventDetailsControllers = require('../controllers/eventDetails.js');
const eventApiControllers = require('../controllers/api.js');


const router = new Router();
router.get('/', indexControllers.index);
router.get('/events/new', newEventControllers.newEvent);
router.post('/events/new', eventCreatedControllers.newEvent);
router.get('/about', indexControllers.about);
router.get('/api/events', eventApiControllers.eventApi);
router.get('/events/:id', eventDetailsControllers.eventDetails);
router.post('/events/:id', eventDetailsControllers.attendeeRegistrationPost);

module.exports = router;
