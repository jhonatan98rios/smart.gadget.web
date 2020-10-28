const mongoose = require('mongoose')
const uri = process.env.MONGO_KEY
//const uri = require("./auth").uri;

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