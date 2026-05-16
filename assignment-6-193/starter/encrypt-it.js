/*
 * encrypt-it.js
 * Handles encryption logic and UI interactions for the Encrypt-It! page.
 */
 
(function() {
  "use strict";
 
  /**
   * Sets up event listeners once the page has fully loaded.
   * This is the entry point for all our JS logic.
   */
  window.addEventListener("load", init);
 
  /**
   * init - called when the window loads.
   * Attaches click handlers to the Encrypt-It and Reset buttons.
   */
  function init() {
    // Part I: Confirm JS is running by logging to the console
    console.log("Window loaded!");
 
    // Part II: Attach the encrypt handler to the Encrypt-It button
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
 
    // Part III: Attach the reset handler to the Reset button
    document.getElementById("reset").addEventListener("click", handleReset);
  }
 
  /**
   * handleClick - called when the user clicks "Encrypt-It!".
   * Reads the textarea value, runs it through the selected cipher,
   * and displays the result in the #result paragraph.
   */
  function handleClick() {
    console.log("Button clicked!");
 
    // Grab the raw text from the textarea
    var inputText = document.getElementById("input-text").value;
 
    // Check which cipher type is selected from the dropdown
    var cipherType = document.getElementById("cipher-type").value;
 
    var encryptedText = "";
 
    if (cipherType === "shift") {
      // Run the shift cipher on the input
      encryptedText = shiftCipher(inputText);
    }
 
    // Display the result in the #result paragraph
    document.getElementById("result").textContent = encryptedText;
  }
 
  /**
   * handleReset - called when the user clicks "Reset".
   * Clears out the input textarea and the result paragraph.
   */
  function handleReset() {
    // Clear the input text area
    document.getElementById("input-text").value = "";
 
    // Also clear the result so it doesn't show stale output
    document.getElementById("result").textContent = "";
  }
 
  /**
   * shiftCipher - encrypts text using a basic shift cipher.
   * Each letter is shifted one position forward in the alphabet.
   * 'z' wraps around to 'a'. Non-letter characters are left unchanged.
   * All input is treated as lowercase.
   *
   */
  function shiftCipher(text) {
    // Convert everything to lowercase so we only deal with one case
    text = text.toLowerCase();
    let result = "";
 
    for (let i = 0; i < text.length; i++) {
      // If the character isn't a letter, leave it as-is (spaces, punctuation, etc.)
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        // Special case: z wraps around to a
        result += 'a';
      } else {
        // For all other letters, shift forward by 1 using char codes
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
 
    return result;
  }
 
})();