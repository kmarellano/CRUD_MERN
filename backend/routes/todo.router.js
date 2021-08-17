const express = require('express');
const router = express.Router();

const { getItems, getItemById, updateItem, deleteItem, newItem } = require('../controllers/todo.controller');

router.route('/items').get(getItems);
router.route('/items/:id').get(getItemById);
router.route('/items/post').post(newItem);
router.route('/items/update/:id').put(updateItem);
router.route('/items/delete/:id').delete(deleteItem);

module.exports = router;