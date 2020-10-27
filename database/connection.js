const mongoose = require('mongoose')

let environment = 'dev' // dev || prod
let uri;

if(environment == 'dev'){
  uri = require("./auth").uri;

} else {
  uri = process.env.MONGO_KEY 
}


mongoose.connect(
  uri, {
    promiseLibrary: global.Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log("We're connected!")

}).catch((err) => {
  console.log("Erro: " + err)

})

module.exports = mongoose