// callAPI function that takes the base and exponent numbers as parameters
var callAPI = (num1, num2) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ "num1": num1, "num2": num2 });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://lguminsdxe.execute-api.us-east-1.amazonaws.com/dev/", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
}

let getNum1 = document.getElementById('num1');
let getNum2 = document.getElementById('num2');

function add() {
    callAPI(getNum1.value, getNum2.value)
    // const num1 = getNum1.valueAsNumber;
    // const num2 = getNum2.valueAsNumber;
    // const result = num1 + num2;
    // displayResult(result);
}

// function subtract() {
//     const num1 = getNum1.valueAsNumber;
//     const num2 = getNum2.valueAsNumber;
//     const result = num1 - num2;
//     displayResult(result);
// }

// function multiply() {
//     const num1 = getNum1.valueAsNumber;
//     const num2 = getNum2.valueAsNumber;
//     const result = num1 * num2;
//     displayResult(result);
// }

// function divide() {
//     const num1 = getNum1.valueAsNumber;
//     const num2 = getNum2.valueAsNumber;
//     if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
//         displayResult('Invalid input or division by zero');
//     } else {
//         const result = num1 / num2;
//         displayResult(result);
//     }
// }

// function displayResult(result) {
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = 'Result: ' + result;
// }

