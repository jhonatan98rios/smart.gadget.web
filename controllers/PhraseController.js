const Phrase = require('../models/Phrase')
const mongoose = require('../database/connection')

class PhraseController {

  /* Create */

  saveData(text, label) {
    return new Promise((resolve, reject) => {
      resolve(Phrase.create(text, label))
    })
  }

  store(text, label){
    this.saveData(text, label).then((result) => {
      console.log(result)

    }).catch((err) => {
      console.log(err)

    }).finally(() => {
      mongoose.disconnect()

    })
  }

  /* async store(text, label) {
    try {
      let data = await Phrase.create(text, label);  
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  } */

}

module.exports = new PhraseController();
