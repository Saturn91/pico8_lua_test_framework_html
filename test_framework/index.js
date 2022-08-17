const test_output = window.test_output.split(window.lua_output_new_line);
const testOutputElement = document.getElementById("test-output-element");

test_output.forEach(log_line => {
    const isError = log_line.includes("error")
    
    const logLineElement = document.createElement("p")

    isError ? logLineElement.classList.add("error-line") : logLineElement.classList.add("info-line");

    logLineElement.innerText = log_line;
    testOutputElement.appendChild(logLineElement)
});
