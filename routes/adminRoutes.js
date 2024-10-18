const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/add-item', adminController.showAddItemForm);

router.post('/add-item', adminController.addMenuItem);

router.get('/edit-item/:id', adminController.showEditItemForm);

router.post('/edit-item/:id', adminController.editMenuItem);

router.post('/delete-item/:id', adminController.deleteMenuItem);

module.exports = router;
