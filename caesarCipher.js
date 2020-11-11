// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let regex = /\W/; // for non-alphabetical chars.
    let key = 13;
    let chars = [];
    for(let i=0; i<str.length; i++){
      if(regex.test(str[i])){
        chars.push(str[i]);
      } else{
        (str[i].charCodeAt()+key <= "Z".charCodeAt())? chars.push(String.fromCharCode(str[i].charCodeAt()+key)):chars.push(String.fromCharCode(str[i].charCodeAt()+key-("Z".charCodeAt()+1-"A".charCodeAt())));
      }
    }
    return chars.join("");
  }
  
  let orgStr = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
  console.log(orgStr);
  console.log(rot13(orgStr));
  