 const Items = require('../models/list.model');

 exports.getItems = async(req, res, next) => {
     try {
         const items = await Items.find();
         res.json(items);
     } catch (error) {
         throw error;
     }
 }

 exports.getItemById = async(req, res, next) => {
     try {
         const item = await Items.findOne({ "_id": req.params.id });
         console.log(item);
         if (!item) {
             return res.status(404).json({
                 message: 'Item not found',
             })
         }
         res.json(item);
     } catch (error) {
         throw error;
     }
 }

 exports.newItem = async(req, res, next) => {
     try {
         const item = await Items.create(req.body);
         console.log(item);
         res.status(201).json({
             message: 'Item created',
             item
         });
     } catch (error) {
         throw error;
     }
 }

 exports.updateItem = async(req, res, next) => {
     try {
         let filter = { "_id": req.params.id };
         let item = await Items.findOne(filter);
         console.log(item);
         if (!item) {
             return res.status(404).json({
                 message: 'Item not found',
             })
         }

         item = await Items.findOneAndUpdate(filter, req.body, {
             new: true,
             runValidators: true,
             useFindAndModify: false,
         });

         res.status(200).json({
             "message": "Item Updated",
             item
         });
     } catch (error) {
         throw error;
     }
 }

 exports.deleteItem = async(req, res, next) => {
     try {
         let filter = { "_id": req.params.id };
         let item = await Items.findOne(filter);
         console.log(item);
         if (!item) {
             return res.status(404).json({
                 message: 'Item not found',
             })
         }
         await item.remove();

         res.status(200).json({
             "message": "Item Deleted",
             item
         });
     } catch (error) {
         throw error;
     }
 }