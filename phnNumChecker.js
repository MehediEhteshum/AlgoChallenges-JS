// Return true if the passed string looks like a valid US phone number.
// e.g. 555-555-5555, 5555555555, 555-5555, 1 555)555-5555, 123**&!!asdf#, (6054756961), 2 (757) 622-7382, 0 (757) 622-7382, -1 (757) 622-7382, 1 456 789 4444

function telephoneCheck(str) {
    let regex = /^\s*1*\s*\(\d\d\d\)\-*\s*\d\d\d\-*\s*\d\d\d\d$|^\s*1*\s*\d\d\d\-*\s*\d\d\d\-*\s*\d\d\d\d$/;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("1 (555)-555-5555"));
  