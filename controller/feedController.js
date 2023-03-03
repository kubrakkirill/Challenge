const {request, response} = require("express");
const feedModel = require('../models/feedModel.js')

const getFeed = (request, response) => {
    feedModel.find()
        .sort({ created_at: '-1' })
        .then(result => {
            response.render('homePage', {
                feed: result,
            })
        })
        .catch(error => {
            console.log(error)
        })
}
const addFeed = (request, response) => {
    let newUser = new feedModel(request.body);
    newUser.save()
        .then(() => {
            getFeed(request, response)
        })
        .catch(error => {
            console.log(error)
        })
}

const getOneFeed = (req, res) => {
    feedModel.findById(req.params.feedId)
        .then( result => {
            res.render('feedPage', {
                feed: result,
            })
        })
        .catch( error => {
            console.log(error)
        })
}
const deleteFeed = (req, res) => {
    feedModel.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(error => {
            console.log(error)
        })
}
const getFeedToEdit = (req, res) => {
    feedModel.findById(req.params.feedId)
    // feedModel.findByIdAndUpdate(req.params.feedId, req.body)
        .then( result => {
            res.render('editFeed', {
                feed: result,
            })
        })
        .catch( error => {
            console.log(error)
        })
}
const editFeed = (req, res) => {
    // feedModel.findById(req.params.id)
    feedModel.findByIdAndUpdate(req.params.id, req.body)
        .then( feed => {
            res.redirect(`/feed/${feed._id}`)
        })
        .catch( error => {
            console.log(error)
        })
}
module.exports = {
    getFeed,
    addFeed,
    getOneFeed,
    deleteFeed,
    getFeedToEdit,
    editFeed
}