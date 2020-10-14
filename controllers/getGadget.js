const natural = require('natural');
const classifier = new natural.BayesClassifier();
const {notebooks} = require('../mockdata/notebooks.json')
const db = require('../mockdata/db.json')

/* read model */
function readTrain() {
  natural.BayesClassifier.load('../mockdata/classifier.json', null, function(err, classifier) {
    if(err) {
      return err
    } 
    return classifier
  });
}

function saveTrain(classifier){
  classifier.save('../mockdata/classifier.json', function(err, classifier) {
    if (err) console.log(err)
    console.log(classifier)
  });
}


/* IA function */
const getGadget = async function (request){
  
  /* Do a train in database */
  try {
    classifier = readTrain()
  }catch{
    db.train.forEach((item)=>{
      classifier.addDocument(item.text, item.label);
    })
    classifier.train();
    saveTrain(classifier)
  }  
      
  /* Get the label of the sended specification */
  let label = classifier.classify(request.text);
      
    /* Object literals is like a switch case method */
  let specs = {
    'xlow': notebooks.xlow,
    'low': notebooks.low,
    'medium': notebooks.medium,
    'high': notebooks.high,
    'xhigh': notebooks.xhigh,
    'premium': notebooks.premium,
    'pro': notebooks.pro,
    'default': {"message":"Sua busca falhou, tente mais tarde"}
  };
    
  return specs[label] || specs["default"]  
}


module.exports = getGadget