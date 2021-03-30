const { learn } = require('../../Mockdata/Learn')

export default async (req, res) => {

  res.statusCode = 200
  res.send(learn)
}

