// Find the display
const display = document.getElementById("display");

// Find all buttons
const buttons = document.querySelectorAll("button");

// Store the calculation
let expression = "";

// Check every button
buttons.forEach(function(button) {

    // When button is clicked
    button.addEventListener("click", function() {

        // Get button text
        const value = button.textContent;

        // Clear
        if (value === "C") {

            expression = "";
            display.value = "";

        }

        // Equal
        else if (value === "=") {

            try {

                expression = eval(expression);
                display.value = expression;

            } catch {

                display.value = "Error";
                expression = "";

            }

        }

        // Backspace
        else if (value === "⌫") {

            expression = expression.slice(0, -1);
            display.value = expression;

        }

        // Normal buttons
        else {

            expression += value;
            display.value = expression;

        }

    });

});
