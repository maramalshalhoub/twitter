const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tweetSchema = new Schema({

    text : {type: String, required : true, },
    
},{timestamps: true})






const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet;