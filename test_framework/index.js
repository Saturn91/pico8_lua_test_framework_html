const test_output = window.test_output.split(window.lua_output_new_line);
const testOutputElement = document.getElementById("test-output-element");

const showPassed = document.getElementById("show-passed");

function updateLog(show_passed) {
    testOutputElement.innerHTML="";
    test_output.forEach(log_line => {
        const isError = log_line.includes("error")
        const isPassed = log_line.includes("[PASS] -> ")
        if ((isPassed && show_passed==true) || isError) {
            const logLineElement = document.createElement("p")
        
            isError && logLineElement.classList.add("error-line");
            isPassed && logLineElement.classList.add("info-line"); 
        
            logLineElement.innerText = log_line;
            testOutputElement.appendChild(logLineElement)
        }
        
    });
}

showPassed.addEventListener('change', (event) => {
    updateLog(event.target.checked);
})

updateLog(true);

