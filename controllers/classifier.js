const natural = require('natural');
const classifier = new natural.BayesClassifier();

const database = require('../mockdata/db.json')
const {notebooks} = require('../mockdata/notebooks.json')

export class TextClassifier {

  static train(){
    database.train.forEach((item) => {
      classifier.addDocument(item.text, item.label);
    })
    classifier.train();
    return classifier
  }

  static useSavedTrain(){
    natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
      if (err) return null
      classifier = classifier
    });
    return classifier
  }

  static saveTrain(classifier){
    classifier.save('classifier.json', function(err, classifier) {
      if (err) return err
      return 'Train has been saved'
    })
  }

  static makeClassification(text){

    const savedTrain = this.useSavedTrain()
    const _classifier = savedTrain ? savedTrain : this.train()
    this.saveTrain(_classifier)
    
    /* Get the label of the sended specification */
    const label = _classifier.classify(text);

    /* Object literals is like a switch case method */
    const specs = {
      'xlow': notebooks.xlow,
      'low': notebooks.low,
      'medium': notebooks.medium,
      'high': notebooks.high,
      'xhigh': notebooks.xhigh,
      'premium': notebooks.premium,
      'pro': notebooks.pro,
      'default': { "message": "Sua busca falhou, tente mais tarde" }
    };

    return specs[label] || specs["default"]
  }
}
