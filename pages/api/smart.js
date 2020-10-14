const { TextClassifier } = require('../../controllers/classifier')

export default (req, res) => {

  const classifier = new TextClassifier()

  const {
    query: { text },
  } = req

  classifier.train()
  //classifier.saveTrain()

  let result = classifier.makeClassification(text)
  

  res.statusCode = 200
  res.json({ result })
}
