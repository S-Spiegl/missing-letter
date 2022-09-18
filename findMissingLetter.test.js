const findMissingLetter = require('./findMissingLetter')

describe('findMissingLetter', () => {
  it('finds missing letter', () => {
    expect(findMissingLetter(['a','c'])).toEqual('b')
  })  
  it('finds missing letter longer', () => {
    expect(findMissingLetter(['a','b','c','d','f'])).toEqual('e')
  })  
  it('finds missing letter capitalized', () => {
    expect(findMissingLetter(['O','Q','R','S'])).toEqual('P')
  })
})
