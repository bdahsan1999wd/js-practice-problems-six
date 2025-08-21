/*------------------------------------------------------------

Write a function named maxInArray that takes an array of numbers representing heights in centimeters.
The function should return the tallest height in the array.

Example:
Input: [167, 190, 120, 165, 137, 265]
Output: 265

------------------------------------------------------------*/


function maxInArray(heights) {
    let tallest = heights[0];
    console.log('Initial tallest:', tallest);

    for (let i = 0; i < heights.length; i++) {
        console.log('Checking index', i, 'value:', heights[i]);

        if (heights[i] > tallest) {
            tallest = heights[i];
            console.log('New tallest found:', tallest);
        }
    }

    console.log('Final tallest height in cm:', tallest);

    return tallest;
}

const heights = [167, 190, 120, 165, 137, 265];

const tallest = maxInArray(heights);

console.log('Tallest cm is:', tallest);