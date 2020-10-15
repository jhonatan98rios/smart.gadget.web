const getGadget = require('../../controllers/getGadget')

export default async (req, res) => {

  if( req.body.text && req.body.text.length > 0 && req.body.text.length < 1024 ){
    let list = await getGadget(req.body)
    res.statusCode = 200
		res.send(list)
	}else{
		res.statusCode = 500
		res.json({ message: 'Houve um problema ao executar a operação. Tente mais tarde'});
	}
}
