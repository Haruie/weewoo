document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('black-background');

    const yesButton = document.getElementById('yesButton');
    const content = document.getElementById('content');
    const asciiTextContainer = document.getElementById('asciiText');
    
    const asciiText = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⢠⠿⠷⣭⣶⣯⣥⣶⣾⣿⠀⠀⠀⠀⢠⠖⣒⡒⢢⣄⡴⠒⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
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
⠀⠀⠀⠈⢿⣿⣦⣄⠀⠀⠘⣧⠀⢀⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⡿⠁⢸⡏⣸⣿⣿⣿⡟⠀⠸⣿⣿⣿⢀⡿⢠⣿⣿⣿⠏⠀⠀⡇⠀
⠀⠀⠀⠀⠈⢿⣿⣿⣷⣄⠀⣸⣷⠉⣿⣿⣿⣿⣿⢹⣸⣿⣿⡿⠁⠀⢸⣇⣿⣿⣿⡟⠀⠀⠀⠹⣿⣿⣼⢧⣿⣿⠟⠁⢀⢔⡫⠆⠀
⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣄⠹⡆⢹⣿⣿⣿⡟⢸⣿⡿⠋⡀⠀⠀⣿⢹⣿⣿⠏⢀⣴⣿⠀⠀⠙⢿⣿⠛⠋⢁⡠⣺⠔⠉⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⠟⢿⣿⣿⣿⣧⣹⡜⣿⣿⣿⠇⢸⣧⠀⢰⣿⡀⠀⣿⠸⠟⠁⠀⣾⣿⡟⠀⠀⠀⢸⣇⡠⢖⡭⠊⠀⠀⠀⠀⡄⠀
⠀⠀⠀⠀⠀⠀⢾⠭⢒⡿⠿⢿⣿⣿⣿⣿⣿⠏⠀⠸⣿⠀⣿⣿⣷⢰⣿⠀⠀⠀⣼⣿⣿⠇⠀⢀⡤⣞⠭⠚⢹⠀⠀⠀⠀⠀⠀⠇⠀
⠀⠀⠀⠀⠀⠀⢸⡀⠀⠘⡏⠒⠪⠭⣛⡿⠯⣀⡀⠀⣿⠀⣿⣿⣿⣸⡿⠀⠀⢰⣿⣿⣿⠴⣪⠕⠊⠁⠀⠀⠚⠀⠀⠀⠀⠀⢀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢳⠀⠀⠀⠀⠉⠑⢲⡪⠭⣛⡓⠿⢿⣿⣿⣇⠀⣀⠼⢛⡩⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠉⢁⡐⠖⠈⠩⠔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠘⣆⠀⠀⢀⡀⠠⠼⠓⠂⠩⠑⠒⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡙⠂⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⡸⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⡀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠀⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠘⣳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠆⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡄⠀⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢆⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢾⠃⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣨⠏⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡶⠋⠉⠓⢦⣄⢣⡈⢧⠀⠀⠀⠀⠀⠀⠀⠀⢰⡛⠀⣰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣦⣄⡀⠀⠙⢷⣷⠀⢧⠀⠀⠀⠀⠀⠀⢀⣣⡵⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣤⣹⣟⣈⣇⣀⡠⠤⠖⠛⠉⣁⣰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⣉⣽⠿⢻⣿⣧⣤⣤⡶⠶⠛⠋⠁⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠷⠶⠛⠉⠁⢀⣿⡞⣧⠐⠀⠀⠀⢸⢸⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣜⡟⡇⢻⡆⠀⠀⠀⠀⠏⡄⠀⠘⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠃⡇⠀⣿⠀⣀⠀⠀⠸⠃⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠏⠀⠃⠀⢸⡇⢸⠀⠀⠀⢀⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠛⠦⣀⣀⠀⠀⡇⠈⡇⠀⠀⠈⡀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠋⠀⠀⠀⠈⢸⠀⠀⢹⠀⢣⢀⡀⠤⠒⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀






$$$$$$$$\ $$\       $$$$$$\  $$\      $$\ $$$$$$$$\ $$$$$$$\   $$$$$$\        $$$$$$$$\  $$$$$$\  $$$$$$$\         $$$$$$\  $$\       $$\      $$\  $$$$$$\   $$$$$$\  
$$  _____|$$ |     $$  __$$\ $$ | $\  $$ |$$  _____|$$  __$$\ $$  __$$\       $$  _____|$$  __$$\ $$  __$$\       $$  __$$\ $$ |      $$$\    $$$ |$$  __$$\ $$  __$$\ 
$$ |      $$ |     $$ /  $$ |$$ |$$$\ $$ |$$ |      $$ |  $$ |$$ /  \__|      $$ |      $$ /  $$ |$$ |  $$ |      $$ /  $$ |$$ |      $$$$\  $$$$ |$$ /  $$ |$$ /  \__|
$$$$$\    $$ |     $$ |  $$ |$$ $$ $$\$$ |$$$$$\    $$$$$$$  |\$$$$$$\        $$$$$\    $$ |  $$ |$$$$$$$  |      $$$$$$$$ |$$ |      $$\$$\$$ $$ |$$$$$$$$ |\$$$$$$\  
$$  __|   $$ |     $$ |  $$ |$$$$  _$$$$ |$$  __|   $$  __$$<  \____$$\       $$  __|   $$ |  $$ |$$  __$$<       $$  __$$ |$$ |      $$ \$$$  $$ |$$  __$$ | \____$$\ 
$$ |      $$ |     $$ |  $$ |$$$  / \$$$ |$$ |      $$ |  $$ |$$\   $$ |      $$ |      $$ |  $$ |$$ |  $$ |      $$ |  $$ |$$ |      $$ |\$  /$$ |$$ |  $$ |$$\   $$ |
$$ |      $$$$$$$$\ $$$$$$  |$$  /   \$$ |$$$$$$$$\ $$ |  $$ |\$$$$$$  |      $$ |       $$$$$$  |$$ |  $$ |      $$ |  $$ |$$$$$$$$\ $$ | \_/ $$ |$$ |  $$ |\$$$$$$  |
\__|      \________|\______/ \__/     \__|\________|\__|  \__| \______/       \__|       \______/ \__|  \__|      \__|  \__|\________|\__|     \__|\__|  \__| \______/ 
                                                                                                                                                                       
                                                                                                                                                                       
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
    const typingSpeed = 10; // milliseconds
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
