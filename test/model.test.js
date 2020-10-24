const getGadget = require('../controllers/getGadget')
const {notebooks} = require('../mockdata/notebooks.json')
const {tests} = require('../mockdata/db.json')

/* describe('main', ()=>{
  
  test.map((request, i)=>{

    let client = { text: request.text }
    let label = request.label

    it(`Should return ${label} notebooks`, ()=>{
      expect(getGadget(client)).toBe(notebooks[label])
    })
  })
}) */

tests.map((request, i)=>{

  let client = { text: request.text }
  let label = request.label

  test(`Should return ${label} notebooks: ${i}`, () => {
    return getGadget(client).then(data => {
      expect(data).toBe(notebooks[label]);
    });
  });

})
