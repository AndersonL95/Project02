const router = require('express').Router();
const upload = require('../config/configMulter');
const NewsController = require('../controllers/newsController');
const authAdmin = require('../utils/authAdmin');
const auth = require('../utils/auth');

router.post('/create_notice',auth, authAdmin, upload.array("images",5),NewsController.createNews);
router.get('/noticias',NewsController.getNotice);
router.get('/noticias/:id', auth, authAdmin, NewsController.deleteNews);
router.put('/noticias/:id', auth, authAdmin, upload.array("images",5),NewsController.updateNews);

module.exports = router