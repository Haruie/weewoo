document.addEventListener('DOMContentLoaded', () => {
    const typingArea = document.getElementById('typing-area');
    const textToType = "Here is the text that will be typed out..."; // Replace this with your text
    
    let index = 0;
    const typingSpeed = 50; // Adjust the typing speed (ms)

    function type() {
        if (index < textToType.length) {
            typingArea.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
