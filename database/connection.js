const mongoose = require('mongoose')

let uri;

/* let environment = 'prod' // dev || prod
if(environment == 'dev'){
  uri = require("./auth").uri;

} else {
  uri = process.env.MONGO_KEY 
} */

uri = process.env.MONGO_KEY 


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