// Find the missing letter in the passed letter range and return // it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    // standard letters.
    let baseStr1 = "abcdefghijklmnopqrstuvwxyz";
    let baseStr2 = baseStr1.toUpperCase();
    let newStr = "";
    // where the 'str' belongs to?
    if(baseStr1.includes(str[str.length-1])){
      // all letters in the 'str' range.
      newStr = baseStr1.slice(baseStr1.indexOf(str[0]), baseStr1.indexOf(str[str.length-1])+1);
    }
    else if(baseStr2.includes(str[str.length-1])){
      newStr = baseStr2.slice(baseStr2.indexOf(str[0]), baseStr2.indexOf(str[str.length-1])+1);
    }
    // removing str letters from newStr.
    for(let i=0; i<str.length; i++){
      newStr = newStr.replace(str[i], "")
    }
    if(newStr === ""){
      return undefined;
    }
    return newStr;
  }
  
  console.log(fearNotLetter("ABEJ"));
  