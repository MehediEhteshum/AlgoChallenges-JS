// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
    let keyValPairs = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&apos;"
    }
    let regex = /[&<>'"]/g;
    let found = str.match(regex);
    let newStr = str;
    if(found !== null){
      for(let i=0; i<found.length; i++){
        newStr = newStr.replace(found[i], keyValPairs[found[i]]);
      }}
    return newStr;
  }
  
  console.log(convertHTML("ab&c"));