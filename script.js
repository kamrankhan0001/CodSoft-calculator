// Get a reference to the input element with the id 'inputBox'
let input = document.getElementById('inputBox');

// Get all the button elements on the page
let buttons = document.querySelectorAll('button');

// Initialize a variable to store the calculation string
let string = ""; // This variable will store the expression to be evaluated

// Convert the NodeList of buttons to an array for easier manipulation
let arr = Array.from(buttons);

// Loop through each button in the array and add event listeners
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // When a button is clicked, check its content
        
        if (e.target.innerHTML == '=') {
            // If the button content is '=', perform the calculation using eval
            // and update the input value with the result
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            // If the button content is 'AC', clear the calculation string
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            // If the button content is 'DEL', remove the last character from the string
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // For other buttons, append their content to the calculation string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
