const natural = require('natural');
const classifier = new natural.BayesClassifier();
const {notebooks} = require('../mockdata/notebooks.json')
const db = require('../mockdata/db.json')

/* read model */
function readTrain() {
  natural.BayesClassifier.load('./mockdata/classifier.json', null, function(err, classifier) {
    if(err) {
      return err
    } 
    return classifier
  });
}

function saveTrain(classifier){
  classifier.save('./mockdata/classifier.json', function(err, classifier) {
    if (err) console.log(err)
  });
}

/* IA function */
const getLabel = async function (request){
  
  /* Do a train in database */
  try {
    classifier = readTrain()
  }catch{
    db.train.forEach((item)=>{
      classifier.addDocument(item.text, item.label);
    })
    classifier.train();
    //saveTrain(classifier)
  }  
    
  return classifier.classify(request.text);
}


module.exports = getLabel