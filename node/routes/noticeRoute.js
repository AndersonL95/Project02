const router = require('express').Router();
const upload = require('../config/configMulter');
const NewsController = require('../controllers/newsController');
const authAdmin = require('../utils/authAdmin');
const auth = require('../utils/auth');

router.post('/create_notice',upload.array("images",5),NewsController.createNews, auth,authAdmin);
router.get('/noticias', NewsController.getNotice);

module.exports = router