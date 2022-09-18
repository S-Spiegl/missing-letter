function findMissingLetter(array)
{
  for(let i = 1; i < array.length; i++){
    const prev = array[i - 1].charCodeAt();
    const current = array[i].charCodeAt();
    console.log(prev)
    console.log(current)
    if(current-prev != 1){
      return String.fromCharCode(prev+1)
    }
  }
}

  module.exports = findMissingLetter;