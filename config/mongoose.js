const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://kubrakkirill7:test1234@cluster0.mrhdbq3.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB is connected')
    })
    .catch(error => {
        console.log(error)
    })