// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    let regex = /^[^aeiou]+/i;
    let newStr = "";
    if(regex.test(str)){
      newStr = str.replace(regex, "")+str.match(regex)[0]+"ay";
    }
    else{
      newStr = str+"way";
    }
    return newStr;
  }
  
  let orgStr = "lalaland";
  console.log(orgStr);
  console.log(translatePigLatin(orgStr));