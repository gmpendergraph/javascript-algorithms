function reverseString(str) {
  /* 1st way 
  var strArr = str.split(""); 
  var reverseStringArray = strArr.reverse();
  var reversedString = reverseStringArray.join("");
  return reversedString;
  */
  
  //2nd way
  return str.split("").reverse().join("");
 

}

console.log(reverseString("Persistence and Consistence are key. Happy Coding!"));