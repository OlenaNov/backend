const express = require('express');
const ctrl = require('../controller');
const router = express.Router();
// const ctrlOrders = require('../controller/index');
// const ctrlItems = require('../controller');

router.get('/orders', ctrl.get);
router.get('/orders/:id', ctrl.getById);
router.post('/orders', ctrl.create);
router.put('/orders/:id', ctrl.update);
// router.patch('/orders/:id/status', ctrl.updateStatus);
router.delete('/orders/:id', ctrl.remove);

router.get('/items', ctrl.getItems);

module.exports = router;