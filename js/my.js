var newSentence = prompt("Enter a sentence you want translated into pig latin.");

var pigLatin = function(sentence){
  //READS IN SENTENCE AND SPLITS INTO WORDS
  var words = [];
  var finalList = [];
  var words = sentence.split(" ");
  //FOR EACH WORD, SPLIT IT INTO LETTERS
  for (var i = 0; i < words.length; i += 1){
    var word = words[i];
    var letters = [];
    var letters = word.split("");
      //IF FIRST LETTER IS A VOWEL, ADD "AY" TO THE END
      if(letters[0] === "a" && letters[0] === "e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u"){
        letters.push("ay");
        finalWord = letters.join("");
        finalList.push(finalWord);
      //IF FIRST LETTER IS A CONSONANT
      } else {
        //LOOP THROUGH EACH LETTER IN ORDER
        var count = 0;
        for(var j = 0; j < letters.length; j += 1){
          //IF LETTER IS NOT A VOWEL, PLACE IT INTO A NEW VARIABLE AND PUSH IT BACK INTO END OF LETTERS ARRAY
          if(letters[j] !== "a" && letters[j] !== "i" && letters[j] !== "o" && letters[j] !== "u" && letters[j] !== "e"){
            var firstConsonants = letters.slice(j, j+1);
            letters.push(firstConsonants);
            count += 1;
          //ONCE LOOP REACHES A VOWEL, REMOVE ALL THE LETTERS BEFORE IT AND BREAK OUT OF LOOP
          } else {
            letters.splice(0, count);
            letters.push("ay");
            finalWord = letters.join("");
            finalList.push(finalWord);
            break;
          }
        }
      }
  }
  var output = finalList.join(" ");
  alert(output);
}
pigLatin(newSentence);
