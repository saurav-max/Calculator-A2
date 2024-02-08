window.addEventListener('DOMContentLoaded', () => {
    calculator_input_Number_V.value = '0';
    calculator_input_Number_Previews_V.value = '';
});



let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_Number_Previews_V = document.getElementById('calculator_input_Number_Previews');

let Calculator_input_AC_V = document.getElementById('Calculator_input_AC');


let DisplayValue = '0';

function display(DisplayValue) {
   
    if (calculator_input_Number_V.value === '0') {
        calculator_input_Number_V.value = DisplayValue;
    } else {
        calculator_input_Number_V.value += DisplayValue;
    }
}

Calculator_input_AC_V.addEventListener('click', () => {
    // Reset to '0' when "AC" button is clicked
    calculator_input_Number_V.value = '0';
    calculator_input_Number_Previews_V.value = '';
})

function displaySolve() {
    let eq = calculator_input_Number_V.value;

    calculator_input_Number_Previews_V.value = eq;

    let y = eval(eq);

    calculator_input_Number_V.value = y;
}
