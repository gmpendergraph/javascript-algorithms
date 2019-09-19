function findLongestWordLength(str) {
  //converts string into array of words
  var words = str.split(" ");
  //keeps track of longest word
  var maxLength = 0;
  
  //compares current longest word with next   word
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("Hello, my name is Gia and I love programming");
