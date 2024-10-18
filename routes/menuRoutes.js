const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/menu', menuController.getMenuItems);

router.post('/add-item', menuController.addMenuItem);

router.post('/edit-item/:id', menuController.editMenuItem);

router.post('/delete-item/:id', menuController.deleteMenuItem);

module.exports = router;
