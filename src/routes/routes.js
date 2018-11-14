const Router = require('koa-router');
const indexControllers = require('../controllers/index.js');
const neweventControllers = require('../controllers/newevent.js');
const eventcreatedControllers = require('../controllers/eventcreated.js');
const eventDetailsControllers = require('../controllers/eventDetails.js');

const router = new Router();
router.get('/', indexControllers.index);
router.get('/events/new', neweventControllers.newevent);
router.post('/events/new', eventcreatedControllers.newevent);
<<<<<<< HEAD
router.get('/events/:id', eventControllers.getEvent);
=======
router.get('/events/:id', eventDetailsControllers.eventDetails);
router.get('/about', indexControllers.about);
>>>>>>> 6ba433f466adab5a14003af4911d39bd4aaace5a

module.exports = router;
