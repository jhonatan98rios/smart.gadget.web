const natural = require('natural');
const {hardware} = require('../mockdata/hardware.json')
const db = require('../mockdata/db.json')
const fs = require('fs');


const getGadget = async function (request){

  let classifier;

  try {
    // Read the classifier file with model saved
    const raw = fs.readFileSync('./mockdata/classifier.json'); 
    classifier = natural.BayesClassifier.restore(JSON.parse(raw));

  } catch {
    // Train the model and save he in classifier
    classifier = new natural.BayesClassifier();
    db.train.forEach((item) => classifier.addDocument(item.text, item.label))
    classifier.train();

    // Write the content
    /* var raw = JSON.stringify(classifier);
    fs.writeFile('./mockdata/classifier.json', raw, function (err) {
      if (err) return console.log(err);
      console.log('WriteFile')
    }) */

  } finally {
    
    /* Classifie the requested phrase */
    const label = classifier.classify(request.text);
    let specs = {
      'xlow': hardware.xlow,
      'low': hardware.low,
      'medium': hardware.medium,
      'high': hardware.high,
      'xhigh': hardware.xhigh,
      'premium': hardware.premium,
      'pro': hardware.pro,
      'default': {"message":"Sua busca falhou, tente mais tarde"}
    };
      
    return specs[label] || specs["default"]
  }
}


module.exports = getGadget