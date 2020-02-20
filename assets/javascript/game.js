//an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
    ];
  
  //choose word randomly
  var word = words[Math.floor(Math.random() * words.length)];
  console.log (word);
  
  var rightWord =[];
  var wrongWord = [];
  
    var answerArray = [];
  function generateUnderscore () {
  
    for (var i = 0; i < word.length; i++) {
      answerArray.push ('_');
    }
  return answerArray;
  }
  console.log (generateUnderscore());
  
  //check user entered guess
   //var newDiv  = document.getElementById ("youGuess");
  document.addEventListener("keydown", function(event) {
    console.log(event.key);
    //newDiv.textContent = `${event.key}`;
  var youGuess = event.key;
  var remainingLetters = word.length; 
  console.log (remainingLetters);
  console.log (word.indexOf(youGuess));
  //indexof, where in the string a specifed value occurs.
  
  
  
  if (word.indexOf(youGuess)>-1 && remainingLetters.length>0
  ) {
    //answerArray[word.indexOf(youGuess)] = youGuess;
    console.log (answerArray[3]);
    remainingLetters--;
    console.log (remainingLetters);
    console.log (true);
    rightWord.push (youGuess);
    console.log (rightWord);
  }
  else {
    wrongWord.push (youGuess);
    console.log (wrongWord);
  }
  
  });