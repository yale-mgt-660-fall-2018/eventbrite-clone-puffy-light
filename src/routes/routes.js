const Router = require('koa-router');
const indexControllers = require('../controllers/index.js');
const neweventControllers = require('../controllers/newevent.js');

const router = new Router();
router.get('/', indexControllers.index);
router.get('/newevent.html', neweventControllers.newevent);

module.exports = router;
