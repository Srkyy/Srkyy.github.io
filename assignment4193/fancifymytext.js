//Alert runs immediately when page loads to confirm JS is linked correctly
alert("Hello, world!");
 
// Bigger: increases the textarea font size to 24pt when the Bigger! button is clicked
function bigger() {
    // Alert for when button clicked
    alert("Hello Again!");
    document.getElementById("mytext").style.fontSize = "24pt";
}
 
// Fancify: checks which radio button is selected and applies or removes styles accordingly
function fancify() {
    var textarea = document.getElementById("mytext");
 
    if (document.getElementById("fancyShmancy").checked) {
        // FancyShmancy selected — apply bold, blue, and underline
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
        // apply cursive
        textarea.style.fontFamily = "cursive";

    } else {
        // BoringBetty selected — reset all styles back to normal
        textarea.style.fontWeight = "normal";
        textarea.style.color = "";
        textarea.style.textDecoration = "none";
        textarea.style.fontFamily = "";

    }
}
 
// Moo: uppercases all text, then adds "-Moo" to the last word of each sentence
function moo() {
    var textarea = document.getElementById("mytext");
 
    // First uppercase everything
    var text = textarea.value.toUpperCase();
 
    // Split on periods to get each sentence
    // "Hello world. Bye world." -> ["HELLO WORLD", " BYE WORLD", ""]
    var sentences = text.split(".");
 
    // Loop through each sentence and add -MOO to the last word
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
 
        // Skip empty strings (the last element after the final period is usually empty)
        if (sentence.length === 0) continue;
 
        // Split the sentence into words, add -MOO to the last one, rejoin
        var words = sentence.split(" ");
        words[words.length - 1] = words[words.length - 1] + "-MOO";
        sentences[i] = words.join(" ");
    }
 
    // Rejoin sentences with periods and put it back in the textarea
    textarea.value = sentences.join(".");
}