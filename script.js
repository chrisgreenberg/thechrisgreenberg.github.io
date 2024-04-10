document.getElementById('input-form').onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    const command = input.value.trim();
    input.value = ''; // Clear input field

    const output = document.getElementById('output');
    const newLine = document.createElement("div");

    newLine.innerHTML = `<span class="prompt">user@cyberspace:~$</span> ${command}`;
    output.appendChild(newLine); // Append the new line with the command to the output

    executeCommand(command, output);
    output.scrollTop = output.scrollHeight; // Scroll to the bottom
};

document.addEventListener('mousemove', (e) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Get the mouse position as a percentage of the screen width/height
    const mouseXPercentage = Math.round((e.pageX / screenWidth) * 100);
    const mouseYPercentage = Math.round((e.pageY / screenHeight) * 100);

    // Use the mouse position to adjust the background color
    document.body.style.backgroundColor = `rgb(${mouseXPercentage}%, ${mouseYPercentage}%, 50%)`;
});



function executeCommand(command, output) {
    const responseLine = document.createElement("div");

    switch (command) {
        case 'clear':
            output.innerHTML = '';
            break;
        case 'help':
            responseLine.innerHTML = `Available commands:<br>
                                      - clear: Clears the terminal output<br>
                                      - help: Displays this help message<br>
                                      - myResearch: Shows my research categories<br>`;
            output.appendChild(responseLine);
            break;
        case 'myResearch':
            responseLine.innerHTML = `My Research categories:<br>
                                      - analysis: Dive into data analysis work<br>
                                      - phenomenology: Explore theoretical phenomenology studies<br>
                                      - detector: Learn about detector technology and development<br>`;
            output.appendChild(responseLine);
            break;
        case 'analysis':
            responseLine.innerHTML = "Details about my data analysis work in particle physics.<br>";
            output.appendChild(responseLine);
            break;
        case 'phenomenology':
            responseLine.innerHTML = "Insights into my theoretical phenomenology research.<br>";
            output.appendChild(responseLine);
            break;
        case 'detector':
            responseLine.innerHTML = "Information on detector technology and my contributions.<br>";
            output.appendChild(responseLine);
            break;
        default:
            responseLine.innerHTML = `Command "${command}" not recognized. Try 'help' for a list of commands.<br>`;
            output.appendChild(responseLine);
    }

    // Ensure the last line added is visible at the bottom of the output
    output.scrollTop = output.scrollHeight;
}

