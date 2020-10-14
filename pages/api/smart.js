const getGadget = require('../../controllers/getGadget')

export default async (req, res) => {

  /* const {
    query: { text },
  } = req */

  let list = await getGadget(req.body)
  res.statusCode = 200
  res.send(list)

  if( req.body.text.length > 0 && req.body.text.length < 1024 ){
		let list = await getGadget(req.body)
		res.send(list)
	}else{
		res.status(500).json({ message: 'Houve um problema ao executar a operação. Tente mais tarde'});
	}
}
