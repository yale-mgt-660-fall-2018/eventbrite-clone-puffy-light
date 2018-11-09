const Router = require('koa-router');
const indexControllers = require('../controllers/index.js');
const neweventControllers = require('../controllers/newevent.js');
const eventcreatedControllers = require('../controllers/eventcreated.js');

const router = new Router();
router.get('/', indexControllers.index);
router.get('/newevent.html', neweventControllers.newevent);
router.post('/eventcreated.html', eventcreatedControllers.newevent);

module.exports = router;
