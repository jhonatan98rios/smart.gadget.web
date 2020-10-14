const natural = require('natural');
const database = require('../mockdata/db.json')
const {notebooks} = require('../mockdata/notebooks.json')

class TextClassifier {

  constructor(){
    this.database = database
    this.classifier = new natural.BayesClassifier();
  }

  train(){
    this.database.train.forEach((item) => {
      this.classifier.addDocument(item.text, item.label);
    })
    this.classifier.train();
    return this.classifier
  }

  useSavedTrain(){
    natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
      if (err) return err
      this.classifier = classifier
    });
    return this.classifier
  }

  saveTrain(){
    this.classifier.save('classifier.json', function(err, classifier) {
      if (err) return err
      return 'Train has been saved'
    })
  }

  makeClassification(text){
    
    /* Get the label of the sended specification */
    let label = this.classifier.classify(text);

    /* Object literals is like a switch case method */
    let specs = {
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


export default TextClassifier