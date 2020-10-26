const Phrase = require('../models/Phrase')
const mongoose = require('mongoose')
const db = require("../database/connection");

const uri = db.uri || process.env.MONGO_KEY

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
