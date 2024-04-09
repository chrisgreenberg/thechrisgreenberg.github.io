document.getElementById('input-form').onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    const command = input.value;
    input.value = ''; // Clear input field

    // Display the command in the output div
    const output = document.getElementById('output');
    output.innerHTML += '> ' + command + '\n';

    // Here, you can process the command and display any results
    // For example:
    output.innerHTML += 'Command "' + command + '" not recognized.\n';

    // Scroll to the bottom of the output
    output.scrollTop = output.scrollHeight;
};
