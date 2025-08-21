/*------------------------------------------------------------

Write a function named `isJavaScriptFile` that takes a single string parameter representing a file name (e.g., 'index.js').
The function should return `true` if the file name ends with '.js' (indicating a JavaScript file), and `false` otherwise.

------------------------------------------------------------*/


/*----------------------------------------
Function Name: isJavaScriptFile
Parameter: fileName (string)
Logic: Check if fileName ends with '.js' (case-insensitive)
Return: true if JavaScript file, false otherwise
----------------------------------------*/


function isJavaScriptFile(fileName) {
    // Validation: check input is non-empty string
    if (typeof fileName !== 'string' || fileName.trim().length === 0) {
        return 'Please provide a valid input';
    }
    // Case-insensitive check for '.js'
    return fileName.toLowerCase().endsWith('.js');
}


// --------------------Arrow Function--------------------

// const isJavaScriptFile = fileName =>
//     typeof fileName === 'string' && fileName.trim().length > 0 && fileName.toLowerCase().endsWith('.js');

// ------------ Test Cases ------------
console.log(isJavaScriptFile('index.js'));
console.log(isJavaScriptFile('app.JS'));
console.log(isJavaScriptFile('style.css'));
console.log(isJavaScriptFile('main.jsx'));
console.log(isJavaScriptFile(''));
console.log(isJavaScriptFile(123));