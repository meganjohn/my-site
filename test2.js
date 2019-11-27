palindromeDetection = function(input) {
    // Your code goes here
    var palindrome = true;
    var phraseCharacters = input.toLowerCase().split("");
    var charactersToCheck = [];
    for (var i=0; i < phraseCharacters.length; i++){
      if (phraseCharacters[i] != " "){
        charactersToCheck.push(phraseCharacters[i]);
      } else {
      }
    }
    var numberOfCharacters = charactersToCheck.length;
    for (var j = 0; j < numberOfCharacters/2; j++) {
      var pointerFromEnd = numberOfCharacters-1 - j;
      var pointerFromStart = j;
      if (charactersToCheck[pointerFromStart] !== charactersToCheck[pointerFromEnd]) {
        palindrome = false;
      }
    }
    return palindrome;
};

console.log(palindromeDetection("Bob"));
console.log(palindromeDetection("A man a plan a canal Panama"));

function testing (input) {
  var forwards = input;
  var backwards = input.split("").reverse().join("");
  return forwards === backwards;
}

console.log(testing("bob"));
