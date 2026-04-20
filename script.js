function myAppend(x) {
    let display = document.getElementById("display");
    
    // Logic to prevent starting with multiple zeros
    if (display.value === "0") {
        display.value = x;
    } else {
        display.value += x;
    }
}

function clearAnswer() {
    document.getElementById("display").value = "0";
}

function calculate() {
    let display = document.getElementById("display");
    try {
        // Replace '^' with '**' so JavaScript understands it's a power
        let expression = display.value.replace(/\^/g, '**');
        
        // Use eval to calculate the result
        let result = eval(expression);
        
        display.value = result;
    } catch (err) {
        display.value = "Error";
    }
}
