const Router = require('koa-router');
const indexControllers = require('../controllers/index.js');
const neweventControllers = require('../controllers/newevent.js');
const eventcreatedControllers = require('../controllers/eventcreated.js');

const router = new Router();
router.get('/', indexControllers.index);
router.get('/events/new', neweventControllers.newevent);
router.post('/events/new', eventcreatedControllers.newevent);
router.get('/events/:id', eventControllers.getEvent);

module.exports = router;
