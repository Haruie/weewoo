document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yes-button').addEventListener('click', () => {
        const typingArea = document.getElementById('typing-area');
        typingArea.style.display = 'block';
        const textToType = "Here is the text that will be typed out...";
        
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
});
