const Phrase = require('../models/Phrase')
const mongoose = require('mongoose')

let environment = 'dev'
let uri;

if(environment == 'dev'){
  const db = require("../database/connection");
  uri = db.uri
} else {
  uri = process.env.MONGO_KEY 
}

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

class PhraseController {
  async store(text, label) {
    try {

      let data = await Phrase.create(text, label);  
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new PhraseController();
