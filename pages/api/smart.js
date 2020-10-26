const getGadget = require('../../controllers/getGadget')
const PhraseController = require('../../controllers/PhraseController')

export default async (req, res) => {

  let result = null

  if( req.body.text && req.body.text.length > 0 && req.body.text.length < 1024 ){

    let list = await getGadget(req.body, PhraseController)
    res.statusCode = 200
    result = list
    
	}else{

		res.statusCode = 500
		result = { message: 'Houve um problema ao executar a operação. Tente mais tarde'};
  }
  
  res.send(result)
}

