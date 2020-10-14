const {TextClassifier} = require('../../controllers/classifier')

export default (req, res) => {

  const {
    query: { text },
  } = req

  //textClassifier.train()
  //classifier.saveTrain()

  let result = TextClassifier.makeClassification(text)  

  res.statusCode = 200
  res.json({ result })
}
