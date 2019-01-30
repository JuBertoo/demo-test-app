var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.edit);
router.delete('/:id', userController.delete);

module.exports = router;
