function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
 
  // Only change code below this line
  for(var i =0; i <collection.length; i++){
    var currOb = collection[i];
    var checkable = true;
    for (let key in source){
      if(currOb[key] !== source[key]){
        checkable = false;
      }
    }
    if(checkable){
      arr.push(collection[i])
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ]

, { last: "Capulet" });