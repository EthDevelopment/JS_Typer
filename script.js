const quoteDisplay = document.getElementById("quoteDisplay");  // Get the div element by its ID
const txtInput = document.getElementById("txtInput");
const btnInput = document.getElementById("btnInput");
const tracker = document.getElementById("tracker");

let wordsTyped = 0;

// Initialize the tracker
tracker.textContent = `Words Typed: ${wordsTyped}`;

// Add an event listener to the text bot to detect when the user types
txtInput.addEventListener("input", function(event) {
  const inputText = event.target.value;
  const quoteText = quoteDisplay.textContent;

  // Remove unwanted characters from the input text
  const cleanedInputText= inputText.replace(/[^\w\s]/gi, '');

  // Split the quote and input text into arrays of words
  const inputWords = cleanedInputText.split(" ");
  const quoteWords = quoteText.split(" ");

  // Count the number of words that match between the quote and input words
  let numMatches= 0;
  for (let i=0; i<inputWords.length; i++) {
    if (inputWords[i] === quoteWords[i]) {
      numMatches++;
    } else{
      break;
    }
  }
  // Update the words typed counter
  wordsTyped = numMatches;
  tracker.textContent = `Words Typed: ${wordsTyped}`;
});

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function() {
  quoteDisplay.textContent = reader.result;
  });

  reader.readAsText(file);
});
