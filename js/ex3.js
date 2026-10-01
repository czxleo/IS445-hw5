function arrayInfo(arr) {
    return {
        firstElement: arr[0],
        lastElement: arr[arr.length - 1],
        length: arr.length
    };
}


// Test 1
const numbers = [4, 8, 12, 5, 20];

const result1 = arrayInfo(numbers);

console.log(result1);


// Test 2
const mixedArray = [
    "a",
    2,
    "Hello",
    6,
    [4, 5],
    "bye",
    { name: "Alice", score: 98 }
];

const result2 = arrayInfo(mixedArray);

console.log(result2);