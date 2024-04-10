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
    const radius = 150; // Radius of the circle around the cursor

    // Calculate the gradient's position from the mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Set the background to be a radial gradient centered at (x, y)
    document.body.style.backgroundImage = 
        `radial-gradient(circle at ${x}px ${y}px, rgba(51, 255, 51, 0.8) 0%, rgba(51, 255, 51, 0) ${radius}px)`;
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

