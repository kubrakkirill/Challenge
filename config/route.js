const express = require('express');
const route = express.Router();
const feedController = require('../controller/feedController')

route.get('/', feedController.getFeed);
route.post('/feed', feedController.addFeed);
route.get('/feed/:feedId', feedController.getOneFeed);
route.post('/deleteFeed/:id', feedController.deleteFeed);
route.get('/feed/edit/:feedId', feedController.getFeedToEdit);
route.post('/editFeed/:id', feedController.editFeed);





module.exports = route;