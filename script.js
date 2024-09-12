document.addEventListener('DOMContentLoaded', () => {
    // Gradually change background color
    document.body.style.backgroundColor = 'black';

    const yesButton = document.getElementById('yes-button');
    const initialText = document.getElementById('initial-text');
    const asciiArt = document.getElementById('ascii-art');

    // ASCII art text to be displayed
    const asciiText = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⢠⠿⠷⣭⣶⣯⣤⣶⣾⣿⠀⠀⠀⠀⢠⠖⣒⡒⢢⣄⡴⠒⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠷⣾⣿⡀⢠⡿⠑⠀⠀⢸⣿⡿⡄⠀⠀⠀⢸⢼⣍⠙⠛⠙⢷⡀⠀⣷⠒⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣼⡟⣭⣻⢿⣧⡀⠀⣰⡿⠛⣫⣽⠀⠀⢠⠃⠈⢾⣄⠀⠀⢸⣷⡶⠓⢷⣄⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡏⠀⠈⠀⠙⣿⣴⡿⠁⠀⠁⢸⠂⠀⢸⠀⠀⠀⢫⣆⣰⡟⠁⠀⠀⢈⣿⠃⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⠀⠀⠀⠀⠘⣿⡇⠀⠀⢀⡟⠀⠀⠘⡆⠀⠀⠀⣿⡏⠀⠀⠀⠀⣸⡏⠀⠀⣾⣿⣿⣿⣶⣾⡝⡆⣀⡀
⠀⠀⠀⠀⠀⢀⡠⣤⠤⡀⠈⢧⡀⠀⠀⠀⣻⡇⠀⣠⠞⠀⠀⠀⠀⠙⢄⡀⠀⣿⠁⠀⠀⠀⣰⠋⠀⠀⡰⣿⢿⣏⠀⠹⣷⣿⣿⣿⣿
⠀⠀⡞⠉⢱⡾⠾⠛⣷⠷⡀⠀⠙⠦⠤⢤⣿⣿⠟⠀⠀⠀⠀⠀⢀⣴⣀⠭⢶⣿⣤⣄⠤⠞⠁⠀⠀⠀⣿⣿⠎⢿⣦⣾⠟⠏⠾⣿⡇
⡖⢒⣇⡀⣿⠀⠀⢠⡟⠀⠘⡆⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⣠⣿⣿⡇⠀⢰⡏⠀⠈⠑⠢⣄⡀⠀⠀⢻⡹⠀⢸⡿⠁⠀⠂⣰⡟⠀
⠱⣼⠋⠉⠛⠷⣤⣼⠁⠀⠀⢱⠀⠀⠀⠀⠀⢹⡇⠀⠀⡠⢺⣿⣿⣿⡇⠀⣼⠇⠀⠀⠀⠀⠀⣭⠲⢄⡀⠙⢦⣼⣧⠄⢀⡴⠋⠀⠀
⠀⠻⣆⠀⠀⠀⠈⢻⡄⠀⢀⠆⠀⠀⠀⣰⡄⠘⣷⢀⡜⠁⣾⣿⣿⣿⡇⢀⡿⠀⠀⠀⣴⣧⢸⣿⣧⠀⠉⠲⢄⣿⠋⠉⠉⠀⠀⠀⠀
⠀⠀⠙⢦⡀⠀⠀⠀⣧⣴⠋⠀⠀⠀⢠⣿⣿⡄⢿⡎⠀⢸⣿⣿⣿⣿⡇⢸⡇⠀⢀⣾⣿⣿⣾⣿⣿⡇⠀⠀⢸⠏⠑⠢⣀⣤⡶⠀⠀
⠀⠀⠀⠀⠈⠁⠒⠈⠙⣯⠀⠀⠀⠀⣼⣿⣿⣿⣼⡇⠀⣿⣿⣿⣿⣿⠃⣾⠃⢀⣿⣿⣿⡇⣿⣿⣿⣧⠀⢀⡿⠀⢀⣴⣿⣿⡇⠀⠀
⠀⠀⠀⢀⣀⠀⠀⠀⠀⠘⣷⠀⠀⠀⣿⣿⣿⣿⣟⡇⢠⣿⣿⣿⣿⡟⢀⣿⢀⣾⣿⣿⣿⠇⢿⣿⣿⣿⠀⣸⠇⢠⣾⣿⣿⠏⢣⠀⠀
⠀⠀⠀⠈⢿⣿⣦⣄⠀⠘⣧⠀⢀⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⡿⠁⠀⢸⣇⣿⣿⣿⡟⠀⠀⠀⠹⣿⣿⣼⢧⣿⣿⠟⠁⢀⢔⡫⠆⠀
⠀⠀⠀⠀⠈⢿⣿⣿⣷⣄⠀⣸⣷⠉⣿⣿⣿⣿⣿⣿⣸⣿⣿⡿⠁⠀⢸⣇⣿⣿⣿⡟⠀⠀⠀⠀⠸⣿⣿⠛⠋⢁⡠⣺⠔⠉⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣄⠹⡆⢹⣿⣿⣿⡿⢸⣿⡿⠋⡀⠀⠀⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⢹⣿⣿⡛⠋⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⡝⠂⢹⣿⣧⠠⡘⣿⡴⢻⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⢿⣿⣶⣬⣉⣛⠛⠻⠂⠀⠀⠀⠀⠀⠉⠙⠛⠃⠀⠀⠀⠀⠀⠀⠀⠸⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `;

    yesButton.addEventListener('click', () => {
        initialText.style.display = 'none';
        asciiArt.style.display = 'block';

        // Typing effect for ASCII text
        let i = 0;
        const speed = 10; // Speed of typing effect in milliseconds
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
