document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'black'; // Ensure full black background

    const initialText = document.getElementById('initial-text');
    const yesButton = document.getElementById('yes-button');
    const asciiArt = document.getElementById('ascii-art');
    
    // ASCII text
    const asciiText = `........................`;

    yesButton.addEventListener('click', () => {
        initialText.style.display = 'none';
        asciiArt.style.display = 'block';

        // Typing effect for ASCII text
        let i = 0;
        const speed = 10; // Faster speed in milliseconds
        function typeWriter() {
            if (i < asciiText.length) {
                asciiArt.textContent += asciiText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    });
});
