document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('black-background');

    const yesButton = document.getElementById('yesButton');
    const content = document.getElementById('content');
    const asciiTextContainer = document.getElementById('asciiText');
    
    const asciiText = `
     ____  _               _           ____  
    |  _ \\| |             | |         |  _ \\ 
    | |_) | |_   _  __ _ | | ___  ___| |_) |
    |  _ <| | | | |/ _\` || |/ _ \\/ __|  _ < 
    | |_) | | |_| | (_| || |  __/\\__ \\ |_) |
    |____/|_|\\__,_|\\__,_||_|\\___||___/____/ 
    `;

    yesButton.addEventListener('click', () => {
        content.style.display = 'none';
        setTimeout(() => {
            asciiTextContainer.style.display = 'block';
            typeAsciiText(asciiText, asciiTextContainer);
        }, 500); // delay to ensure content disappears
    });
});

function typeAsciiText(text, container) {
    let index = 0;
    const typingSpeed = 50; // milliseconds
    container.innerHTML = '';

    function type() {
        if (index < text.length) {
            container.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
}
