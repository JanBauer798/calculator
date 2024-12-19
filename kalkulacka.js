// Run after the entire page has loaded
function hlavni(event) {
    // SELECTORS
    const add = document.getElementById("tlPlus");
    const subtract = document.querySelector("#tlMinus");
    const multiply = document.querySelector("#tlKrat");
    const divide = document.querySelector("#tlDeleno");

    const num1 = document.querySelector("#vstup1");
    const num2 = document.querySelector("#vstup2");
    const result = document.querySelector("#vysledek");

    let num_res = null;
    let operator = null;

    // EVENT LISTENERS
    add.addEventListener("click", () => operation("+"));
    subtract.addEventListener("click", () => operation("−"));
    multiply.addEventListener("click", () => operation("×"));
    divide.addEventListener("click", () => operation("÷"));

    num1.addEventListener("input", () => calc());
    num2.addEventListener("input", () => calc());

    // FUNCTIONS
    function operation(op_sign) {
        // Saves new operator.

        operator = op_sign;
        document.querySelector("#operation").textContent = operator;
        console.log("Operator changed to " + operator);
        calc();
    }

    function calc() {
        // Calculates the result.

        const var1 = parseFloat(num1.value);
        const var2 = parseFloat(num2.value);

        // Checks if inputs are numbers.
        // Runs the selected operation.
        if (!isNaN(var1) && !isNaN(var2)) {
            if (operator === "+") {
                num_res = var1 + var2;
            } else if (operator === "−") {
                num_res = var1 - var2;
            } else if (operator === "×") {
                num_res = var1 * var2;
            } else if (operator === "÷") {
                // Zero division handling.
                if (var2 === 0) {
                    num_res = "Nelze.";
                } else {
                    num_res = var1 / var2;
                }
            }

            if (typeof num_res === "number") {
                // Output precision is 6 decimals with redundant zeros removed.
                result.textContent = parseFloat(num_res.toFixed(6));
            } else {
                result.textContent = num_res;
            }
        } else {
            // If an input is NaN, no result is printed. 
            result.textContent = "";
        }
    }
}

// Run function hlavni after the page is loaded.
document.addEventListener("DOMContentLoaded", hlavni);