// you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
function truthCheck(collection, pre) {
    let garbage = ["", null, 0, undefined, NaN]
    for(let i=0; i<collection.length; i++){
      if(!collection[i].hasOwnProperty(pre) | garbage.includes(collection[i][pre])){
        return false;
      }
    }
    return true;
  }
  
  console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"));
    