require('dotenv').config()
const PORT = process.env.PORT
const localDB = process.env.DB
const User = require('./models/user');
const Tweet = require('./models/tweet');
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(localDB, {useNewUrlParser : true})
.then(()=> console.log('mongodb connected'),
(err) => console.log(err))


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false}))//for form data
app.use(express.json())// for json data




//index tweet
app.get('/tweets', (req, res) => {
    Tweet.find()
    .then((tweets)=>{
      res.render('index', { tweets })
    }).catch(err => console.log(err))
  })

  app.get('/tweets/new', (req, res) => {
    res.render('new')
  })

// tweet post
  app.post('/tweets', (req, res) => {

    let data = {
      text: req.body.text
    }
  
   
  
    let tweet = new Tweet(data)
    tweet.save()
    .then(()=> {
      res.redirect('/tweets')
    }).catch(err => console.log(err))
  
    
  })





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })