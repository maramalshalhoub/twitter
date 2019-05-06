const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

    firstname : {type: String, required : true},
    lastname :{type: String, required : true},
    email :{type: String, unique : true},
    username :{type: String, unique : true},
    password :{type: String,},
    tweets :[{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    faves : [{ type: Schema.Types.ObjectId, ref: 'Tweet' }]

},{timestamps: true})






const User = mongoose.model('User', userSchema)
module.exports = User;