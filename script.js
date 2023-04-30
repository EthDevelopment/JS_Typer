const fileInput = document.getElementById("myFileInput");
const button = document.getElementById('txtInput');
const quoteDisplay = document.querySelector(".quote-display");

if (button) {
  button.addEventListener("click", function() {
    fileInput.click(); // Trigger the file selection dialog
  });
  
  fileInput.addEventListener("change", function() {
    readFile(fileInput); // Read the contents of the selected file
  });
} else {
  console.log("The button element could not be found.");
}

function readFile(input) {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const text = reader.result;
    quoteDisplay.textContent = text; // Update the quote display element with the file contents
  }

  reader.readAsText(file);
}

// This function uses the 'rtf-to-text' library to convert RTF formatted text to plain text
function rtfToText(rtfText) {
  const rtfToTextConverter = require('rtf-to-text');
  return rtfToTextConverter.convert(rtfText);
}