// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
    let strList = str.split(" ");
    let retStr = "";
    let i = 0;
    while(i<strList.length){
      retStr += strList[i][0].toUpperCase()+strList[i].slice(1).toLowerCase()+" ";
      i++;
    }
    return retStr.slice(0, -1); // removing last \s.
  }
  
  console.log(titleCase("I'm a little tea pot"));
  