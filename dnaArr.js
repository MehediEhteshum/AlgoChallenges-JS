// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
function pairElement(str) {
    let arr = [];
    for(let i=0; i<str.length; i++){
      let l = str[i];
      switch(l){
        case "G":
        arr.push(["G", "C"])
        break;
        case "C":
        arr.push(["C", "G"])
        break;
        case "A":
        arr.push(["A", "T"])
        break;
        case "T":
        arr.push(["T", "A"])
        break;
      }
    }
    return arr;
  }
  
  console.log(pairElement("GCGCCG"));