const Phrase = require('../models/Phrase')
const mongoose = require('mongoose')
const db = require("../database/connection");

mongoose.connect(db.uri, { useUnifiedTopology: true, useNewUrlParser: true });

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
