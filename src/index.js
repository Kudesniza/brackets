let test = 0

module.exports = function check(str, bracketsConfig) {
  const holder = []
  let sameObject = ['7', '8', '|']
  const openBrackets = ['(','{','[', '5', '1', '3']
  const closedBrackets = [')','}',']', '6', '2', '4']
  
  for (let i=0; i<str.length; i++) { // loop trought all letters of expr
    if (sameObject.includes(str[i])) {
      if (holder[holder.length - 1] === str[i]) {
        holder.splice(-1,1)
      } else {
        holder.push(str[i])
      }
      } else {
        if(openBrackets.includes(str[i])){ // if its oppening bracket
        holder.push(str[i])
        }else if(closedBrackets.includes(str[i])){ // if its closing
          const openPair = openBrackets[closedBrackets.indexOf(str[i])] // find his pair
        if(holder[holder.length - 1] === openPair){ // check if that pair is last element in array
        holder.splice(-1,1) //if so, remove it
        }else{ // if its not
        holder.push(str[i])
        break // exit loop
      }
    }
  }
}
return (holder.length === 0)
}