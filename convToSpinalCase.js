// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    let regSplit = /\s+|[\W_]+|(?=[A-Z]+)/;
    let arr = str.split(regSplit);
    let newArr = [];
    arr.forEach(str => newArr.push(str.toLowerCase()));
    str = newArr.join("-");
    return str;
  }
  let orgStr = 'TheAndyGriffith_Show';
  console.log(orgStr);
  console.log(spinalCase(orgStr));