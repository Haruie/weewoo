function revealText() {
    // Change the background color
    document.body.style.backgroundColor = "black";

    // Prepare the text to display
    var text = "Your flowers will be delivered soon!";
    
    // Get the reveal-text element
    var revealTextElement = document.getElementById("reveal-text");
    
    // Show the reveal-text element
    revealTextElement.classList.remove("hidden");

    // Clear the content first
    revealTextElement.innerHTML = "";

    // Type out text in real-time
    var index = 0;
    var interval = setInterval(function() {
        revealTextElement.innerHTML += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 100); // Adjust the speed of typing by changing the interval time
}
