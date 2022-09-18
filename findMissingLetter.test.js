const findMissingLetter = require('./findMissingLetter')

describe('findMissingLetter', () => {
  it('finds missing letter', () => {
    expect(findMissingLetter(['a','c'])).toEqual('b')
  })  
  // it('finds missing letter', () => {
  //   expect(findMissingLetter(['a','b','c','d','f'])).toEqual('e')
  // })  
})
